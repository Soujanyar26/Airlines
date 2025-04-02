/* 2025-02-19 20:21:39 [17 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:21:58 [71 ms] */ 
DROP TABLE IF EXISTS Seat, Booking, Customer, Flight;
/* 2025-02-19 20:22:02 [5 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:22:20 [39 ms] */ 
CREATE TABLE Flight ( 
    flightId INT AUTO_INCREMENT PRIMARY KEY, 
    flightNumber VARCHAR(20) NOT NULL, 
    departureTime DATETIME NOT NULL, 
    arrivalTime DATETIME NOT NULL, 
    totalSeats INT NOT NULL 
);
/* 2025-02-19 20:22:55 [5 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:23:07 [66 ms] */ 
CREATE TABLE Customer ( 
    customerId INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    phone VARCHAR(20) 
);
/* 2025-02-19 20:23:17 [4 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:23:30 [81 ms] */ 
CREATE TABLE Booking ( 
    bookingId INT AUTO_INCREMENT PRIMARY KEY, 
    customerId INT NOT NULL, 
    flightId INT NOT NULL, 
    bookingDate DATE, 
    FOREIGN KEY (customerId) REFERENCES Customer(customerId) ON DELETE CASCADE, 
    FOREIGN KEY (flightId) REFERENCES Flight(flightId) ON DELETE CASCADE
);
/* 2025-02-19 20:23:37 [5 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:24:12 [89 ms] */ 
CREATE TABLE Seat ( 
    seatId INT AUTO_INCREMENT PRIMARY KEY, 
    flightId INT NOT NULL, 
    seatNumber VARCHAR(10), 
    isAvailable BOOLEAN DEFAULT TRUE, 
    bookingId INT NULL, 
    FOREIGN KEY (flightId) REFERENCES Flight(flightId) ON DELETE CASCADE, 
    FOREIGN KEY (bookingId) REFERENCES Booking(bookingId) ON DELETE SET NULL
);
/* 2025-02-19 20:24:27 [4 ms] */ 
SHOW TABLES;
/* 2025-02-19 20:25:40 [57 ms] */ 
INSERT INTO Flight (flightNumber, departureTime, arrivalTime, totalSeats) 
VALUES 
('AI202', '2025-02-25 10:00:00', '2025-02-25 12:00:00', 150),
('BA305', '2025-03-10 08:30:00', '2025-03-10 11:45:00', 180);
/* 2025-02-19 20:26:12 [12 ms] */ 
INSERT INTO Customer (name, email, phone) 
VALUES 
('John Doe', 'john@example.com', '1234567890'),
('Alice Smith', 'alice@example.com', '9876543210');
/* 2025-02-19 20:26:37 [10 ms] */ 
INSERT INTO Booking (customerId, flightId, bookingDate) 
VALUES 
(1, 1, '2025-02-20'),
(2, 2, '2025-03-05');
/* 2025-02-19 20:26:53 [46 ms] */ 
INSERT INTO Seat (flightId, seatNumber, isAvailable, bookingId) 
VALUES 
(1, '1A', FALSE, 1),
(1, '1B', TRUE, NULL),
(2, '2A', FALSE, 2),
(2, '2B', TRUE, NULL);
/* 2025-02-19 20:27:08 [5 ms] */ 
SELECT * FROM Flight LIMIT 100;
/* 2025-02-19 20:27:21 [3 ms] */ 
SELECT * FROM Customer LIMIT 100;
/* 2025-02-19 20:27:23 [8 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-19 20:27:25 [4 ms] */ 
SELECT * FROM Seat LIMIT 100;
/* 2025-02-19 22:31:56 [24 ms] */ 
INSERT INTO Seat (flightId, seatNumber, isAvailable) 
VALUES 
(1, '1A', TRUE), 
(1, '1B', TRUE), 
(1, '1C', FALSE), -- Booked seat
(2, '2A', TRUE), 
(2, '2B', FALSE);
/* 2025-02-19 22:32:04 [4 ms] */ 
SELECT * FROM Seat LIMIT 100;
/* 2025-02-19 22:35:14 [19 ms] */ 
SELECT * FROM Seat WHERE flightId = 1 LIMIT 100;
/* 2025-02-19 22:37:52 [3 ms] */ 
SELECT * FROM Seat WHERE isAvailable = FALSE LIMIT 100;
/* 2025-02-20 21:52:51 [123 ms] */ 
CREATE TABLE Users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
/* 2025-02-20 21:59:45 [12 ms] */ 
SELECT * FROM Users LIMIT 100;
/* 2025-02-20 22:27:27 [61 ms] */ 
ALTER TABLE Seat MODIFY COLUMN bookingId INT NULL;
/* 2025-02-20 22:31:23 [4 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-20 22:39:43 [35 ms] */ 
ALTER TABLE Seat MODIFY COLUMN bookingId INT NULL;
/* 2025-02-20 22:39:47 [4 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-20 22:48:01 [4 ms] */ 
SELECT * FROM Users LIMIT 100;
/* 2025-02-20 22:48:09 [20 ms] */ 
SELECT * FROM Booking WHERE customerId = (SELECT userId FROM Users WHERE email = 'dummy@gmail.com') LIMIT 100;
/* 2025-02-20 23:05:01 [10 ms] */ 
select * from flight LIMIT 100;
/* 2025-02-20 23:08:29 [4 ms] */ 
SELECT * FROM Flight LIMIT 100;
/* 2025-02-20 23:13:23 [18 ms] */ 
SELECT * FROM Flight WHERE DATE(departureTime) = '2025-02-25' LIMIT 100;
/* 2025-02-20 23:20:23 [9 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-20 23:57:53 [4 ms] */ 
SELECT * FROM Seat WHERE isAvailable = FALSE LIMIT 100;
/* 2025-02-21 00:01:08 [2 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-21 17:17:24 [26 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-21 17:17:28 [5 ms] */ 
SELECT * FROM Seat WHERE isAvailable = FALSE LIMIT 100;
/* 2025-02-21 17:17:37 [16 ms] */ 
SELECT * FROM Flight WHERE DATE(departureTime) = '2025-02-25' LIMIT 100;
/* 2025-02-21 17:19:12 [8 ms] */ 
SELECT flightId, flightNumber, departureTime FROM Flight WHERE departureTime LIKE '2025-02-25%' LIMIT 100;
/* 2025-02-21 18:45:22 [34 ms] */ 
SHOW COLUMNS FROM Flight;
/* 2025-02-21 18:46:49 [110 ms] */ 
ALTER TABLE Flight ADD COLUMN fromLocation VARCHAR(50) NOT NULL;
/* 2025-02-21 18:46:53 [50 ms] */ 
ALTER TABLE Flight ADD COLUMN toLocation VARCHAR(50) NOT NULL;
/* 2025-02-21 18:47:10 [22 ms] */ 
UPDATE Flight SET fromLocation = 'BOM', toLocation = 'BLR' WHERE flightId = 1;
/* 2025-02-21 18:47:32 [5 ms] */ 
Select * from Flight LIMIT 100;
/* 2025-02-21 18:49:37 [3 ms] */ 
SELECT flightId, flightNumber, departureTime, fromLocation, toLocation FROM Flight LIMIT 100;
/* 2025-02-23 20:59:24 [41 ms] */ 
SHOW COLUMNS FROM Flight;
/* 2025-02-23 20:59:42 [5 ms] */ 
SELECT * FROM Users LIMIT 100;
/* 2025-02-23 21:19:24 [20 ms] */ 
SELECT * FROM Flight LIMIT 100;
/* 2025-02-23 21:19:56 [3 ms] */ 
SELECT * FROM Flight 
WHERE DATE(departureTime) = '2025-02-25' 
AND fromLocation = 'BOM' 
AND toLocation = 'BLR' LIMIT 100;
/* 2025-02-23 21:55:53 [6 ms] */ 
SELECT * FROM Booking WHERE customerId = 1 LIMIT 100;
/* 2025-02-23 22:26:06 [6 ms] */ 
SELECT * FROM Seat WHERE bookingId IS NULL LIMIT 100;
/* 2025-02-23 22:31:32 [6 ms] */ 
SELECT * FROM Booking WHERE bookingId = 1 LIMIT 100;
/* 2025-02-23 22:33:24 [2 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-23 22:35:10 [2 ms] */ 
SELECT * FROM Booking WHERE bookingId = 2 LIMIT 100;
/* 2025-02-23 22:35:13 [2 ms] */ 
SELECT * FROM Seat WHERE bookingId = 2 LIMIT 100;
/* 2025-02-24 08:43:31 [19 ms] */ 
INSERT INTO Flight (flightNumber, departureTime, arrivalTime, totalSeats, fromLocation, toLocation)
VALUES 
('AI203', '2025-02-26 06:00:00', '2025-02-26 08:00:00', 180, 'DEL', 'BOM'),
('AI204', '2025-02-27 09:30:00', '2025-02-27 12:00:00', 200, 'BLR', 'HYD'),
('AI205', '2025-02-28 14:00:00', '2025-02-28 16:30:00', 150, 'MAA', 'DEL');
/* 2025-02-24 08:43:50 [23 ms] */ 
INSERT INTO Seat (flightId, seatNumber, isAvailable)
VALUES 
(2, '1A', TRUE), (2, '1B', TRUE), (2, '1C', TRUE), 
(3, '2A', TRUE), (3, '2B', TRUE), (3, '2C', TRUE),
(4, '3A', TRUE), (4, '3B', TRUE), (4, '3C', TRUE);
/* 2025-02-24 09:01:10 [11 ms] */ 
SELECT * FROM Seat WHERE flightId = 5 LIMIT 100;
/* 2025-02-24 09:02:40 [5 ms] */ 
SELECT seatId, flightId, seatNumber FROM Seat LIMIT 100;
/* 2025-02-24 09:04:04 [27 ms] */ 
INSERT INTO Seat (flightId, seatNumber, isAvailable) VALUES 
(5, '1A', TRUE),
(5, '1B', TRUE),
(5, '1C', TRUE),
(5, '2A', TRUE),
(5, '2B', TRUE);
/* 2025-02-24 09:05:18 [5 ms] */ 
SELECT * FROM Booking WHERE customerId = 5 LIMIT 100;
/* 2025-02-24 09:06:29 [3 ms] */ 
SELECT * FROM Booking WHERE customerId = 1 LIMIT 100;
/* 2025-02-24 09:06:36 [3 ms] */ 
SELECT * FROM Booking WHERE customerId = 5 LIMIT 100;
/* 2025-02-24 09:09:52 [8 ms] */ 
SELECT 
    B.bookingId, B.customerId, C.name AS customerName, 
    B.flightId, F.flightNumber, 
    S.seatId, S.seatNumber, S.isAvailable 
FROM Booking B
JOIN Customer C ON B.customerId = C.customerId
JOIN Flight F ON B.flightId = F.flightId
LEFT JOIN Seat S ON B.bookingId = S.bookingId
WHERE B.flightId = 5 LIMIT 100;
/* 2025-02-24 09:10:08 [3 ms] */ 
SELECT * FROM Booking WHERE customerId = 1 LIMIT 100;
/* 2025-02-24 09:10:37 [4 ms] */ 
SELECT 
    B.bookingId, B.customerId, C.name AS customerName, 
    B.flightId, F.flightNumber, 
    S.seatId, S.seatNumber, S.isAvailable 
FROM Booking B
JOIN Customer C ON B.customerId = C.customerId
JOIN Flight F ON B.flightId = F.flightId
LEFT JOIN Seat S ON B.bookingId = S.bookingId
WHERE B.flightId = 5 LIMIT 100;
/* 2025-02-24 13:23:44 [24 ms] */ 
DESCRIBE Flight;
/* 2025-02-24 13:30:04 [13 ms] */ 
SELECT flightId FROM Flight LIMIT 100;
/* 2025-02-24 15:38:55 [5 ms] */ 
SHOW TABLES;
/* 2025-02-24 15:39:36 [3 ms] */ 
SHOW TABLES LIKE 'seat';
/* 2025-02-24 15:39:44 [53 ms] */ 
ALTER TABLE seat RENAME TO seats;
/* 2025-02-24 15:39:48 [3 ms] */ 
SHOW TABLES LIKE 'seats';
/* 2025-02-24 15:40:03 [3 ms] */ 
USE flight_booking;
/* 2025-02-24 15:40:27 [5 ms] */ 
SELECT * FROM seats WHERE flightId = 1 LIMIT 100;
/* 2025-02-24 15:41:10 [18 ms] */ 
SELECT seatNumber, COUNT(*) 
FROM seats 
WHERE flightId = 1 
GROUP BY seatNumber 
HAVING COUNT(*) > 1 LIMIT 100;
/* 2025-02-24 17:59:49 [61 ms] */ 
ALTER TABLE seats RENAME TO seat;
/* 2025-02-24 17:59:51 [6 ms] */ 
SELECT * FROM Seat WHERE flightId = 5 LIMIT 100;
/* 2025-02-25 14:18:24 [27 ms] */ 
SHOW DATABASES;
/* 2025-02-25 14:30:55 [53 ms] */ 
ALTER TABLE seat RENAME TO seats;
/* 2025-02-25 14:30:57 [6 ms] */ 
SELECT * FROM seats LIMIT 100;
/* 2025-02-25 14:34:50 [4 ms] */ 
SELECT * FROM seats WHERE flightId = 1 LIMIT 100;
/* 2025-02-25 14:46:51 [25 ms] */ 
SELECT * FROM Booking LIMIT 100;
/* 2025-02-25 14:46:53 [4 ms] */ 
SELECT * FROM Users LIMIT 100;
/* 2025-02-25 18:28:04 [3 ms] */ 
SELECT seatId, seatNumber, isAvailable FROM seats WHERE flightId = 1 LIMIT 100;
/* 2025-02-25 18:32:04 [17 ms] */ 
SELECT DISTINCT seatNumber, isAvailable FROM seats WHERE flightId = 1 LIMIT 100;
