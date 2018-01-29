-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2018 at 04:03 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fingerprint`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE `calendar` (
  `CalendarID` int(11) NOT NULL,
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `DayOff` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `TotalDayOff` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Position` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `PhoneNumber` int(20) NOT NULL,
  `StartingDate` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `InsuranceID` int(20) NOT NULL,
  `Dayoff` int(10) NOT NULL,
  `Salary` int(20) NOT NULL,
  `Bonus` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Managing employee';

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `Name`, `Position`, `Email`, `Address`, `PhoneNumber`, `StartingDate`, `InsuranceID`, `Dayoff`, `Salary`, `Bonus`) VALUES
('AL02', 'Lieu Hoang Anh', 'Staff', 'anhlieu@gmail.com', '', 0, '2018-01-26', 35345, 0, 10000000, 0),
('DB03', 'Bui Tien Dung', 'Staff', 'dungbui@gmail.com', '', 0, '2018-01-26', 0, 0, 0, 0),
('HL01', 'Le Ngoc Huy', 'Staff', 'lehuy.paul@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-26', 32423423, 0, 10000000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `HistoryId` int(10) NOT NULL,
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(1) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='history is where save history of going in and out the office';

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`HistoryId`, `EmployeeID`, `Name`, `Status`, `Date`) VALUES
(3, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:06:00'),
(4, 'DB03', 'Bui Tien Dung', 0, '2018-01-26 15:06:00'),
(5, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-01 00:00:00'),
(6, 'DB03', 'Bui Tien Dung', 0, '2018-01-01 00:00:00'),
(7, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:09:00'),
(8, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:10:00'),
(9, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:11:00'),
(10, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:11:00'),
(11, 'AL02', 'Lieu Hoang Anh', 0, '2018-01-26 15:12:00');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Salary` int(20) NOT NULL,
  `Bonus` int(20) NOT NULL,
  `Position` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Month` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `Year` varchar(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `system`
--

CREATE TABLE `system` (
  `SystemID` smallint(10) NOT NULL,
  `Esp8266` int(2) NOT NULL,
  `R307` int(2) NOT NULL,
  `Battery` int(2) NOT NULL,
  `MicroSDCard` int(2) NOT NULL,
  `WifiStatus` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `system`
--

INSERT INTO `system` (`SystemID`, `Esp8266`, `R307`, `Battery`, `MicroSDCard`, `WifiStatus`, `Date`) VALUES
(29, 1, 1, 82, 1, 'Lieu Anh', '2018-01-26 03:20:25.000000'),
(30, 1, 1, 83, 1, 'Lieu Anh', '2018-01-26 03:21:37.000000'),
(31, 1, 1, 83, 1, 'Lieu Anh', '2018-01-26 03:22:05.000000'),
(32, 1, 1, 79, 1, 'Lieu Anh', '2018-01-26 03:31:01.000000');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Password`) VALUES
('1', 'admin', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`CalendarID`),
  ADD KEY `employeeID` (`EmployeeID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`HistoryId`),
  ADD KEY `employeeID` (`EmployeeID`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `employeeID` (`EmployeeID`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`SystemID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `CalendarID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `HistoryId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `SystemID` smallint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `calendar`
--
ALTER TABLE `calendar`
  ADD CONSTRAINT `calendar_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `employeeID` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);

--
-- Constraints for table `salary`
--
ALTER TABLE `salary`
  ADD CONSTRAINT `salary_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
