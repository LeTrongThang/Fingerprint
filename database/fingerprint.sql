-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2018 at 09:39 AM
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
('NV01', 'Le Ngoc Huy', 'Staff', 'lehuy.paul@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-01', 11111111, 0, 8000000, 0),
('NV05', 'NGUYEN VAN E', 'Leader', 'nguyee@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 12000000, 0),
('NV09', 'NGUYEN VAN H', 'Staff', 'nguyenh@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 9000000, 0),
('NV78', 'le phuong linh doan', 'Staff', 'lehuy.paul@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-07', 2147483647, 0, 900000000, 0);

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
(1, 'NV09', 'NGUYEN VAN H', 0, '2018-01-01 00:00:00'),
(3, 'NV05', 'NGUYEN VAN E', 0, '2018-01-01 00:00:00'),
(4, 'NV78', 'le phuong linh doan', 0, '2018-01-01 00:00:00');

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

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`ID`, `Name`, `EmployeeID`, `Salary`, `Bonus`, `Position`, `Month`, `Year`) VALUES
(82, 'Le Ngoc Huy', 'NV01', 8000000, 0, 'Staff', '1', '2018'),
(83, 'NGUYEN VAN E', 'NV05', 12000000, 0, 'Leader', '1', '2018'),
(84, 'NGUYEN VAN H', 'NV09', 9000000, 0, 'Staff', '1', '2018'),
(85, 'le phuong linh doan', 'NV78', 900000000, 0, 'Staff', '1', '2018');

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
  MODIFY `HistoryId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
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
