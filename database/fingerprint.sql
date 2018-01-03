-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2018 at 11:28 AM
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
  `Bonus` int(20) NOT NULL,
  `Authen` varchar(6) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='Managing employee';

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `Name`, `Position`, `Email`, `Address`, `PhoneNumber`, `StartingDate`, `InsuranceID`, `Dayoff`, `Salary`, `Bonus`, `Authen`) VALUES
('23423', '4234234', 'Leader', '234234', '234234', 985752395, '2018-01-02T00:00:00.000Z', 234234, 0, 234234, 0, ''),
('234234', '234234', 'Staff', '234234', '234234', 94234, '2018-01-02', 234234234, 0, 234234, 0, ''),
('345345', '5345345', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('3453453523', '345345', 'Staff', '34534', '345345', 5345, '2018-01-02', 345345, 0, 345345, 0, ''),
('35345', '345345', 'Staff', '345345', '345345', 345345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('4345', '345345', 'Staff', '34534', '345345', 345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('45345', '345345', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345345, 0, 345345, 0, ''),
('53453', '345345', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('5456', '456456', 'Staff', '45645', '234234', 6456456, '2018-01-02', 456456, 0, 46456, 0, ''),
('678678', '345345', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345345, 0, 345345, 0, ''),
('h4534', '34534', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('LD45345', '34534', 'Staff', '345345', '345345', 345345, '2018-01-02', 345345, 0, 345345, 0, ''),
('MN43', '24234', 'Leader', '234234', '234234', 23423, '2018-01-02', 234234, 0, 234234, 0, ''),
('NV01', 'Le Ngoc Huy', 'Staff', 'lehuy.paul@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-01', 11111111, 0, 8000000, 0, ''),
('NV02', 'Nguyen Van B', 'Staff', 'nguyenvanb@gmail.com', '77 Binh Thanh, HCM', 98565329, '2018-01-02T00:00:00.000Z', 348953495, 0, 900000, 0, ''),
('NV03', 'Nguyen Van C', 'Staff', 'nguyenvanb@gmail.com', '77 Binh Thanh, hcm', 98565329, '2018-01-02T00:00:00.000Z', 348953495, 0, 900000, 0, ''),
('NV04', 'Nguyen Van D', 'Staff', 'nguyend@gmail.com', '33 thu duc, hcm', 986764232, '2018-01-02T00:00:00.000Z', 2147483, 0, 9000000, 0, ''),
('NV05', 'NGUYEN VAN E', 'Leader', 'nguyee@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 12000000, 0, ''),
('NV09', 'NGUYEN VAN H', 'Staff', 'nguyenh@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 9000000, 0, ''),
('NV11', 'NGUYEN VAN K', 'Leader', 'NGUYENK@GMAIL.COM', '55 QUAN 10', 98432334, '2018-01-02', 234234234, 0, 120000000, 0, ''),
('NV12', 'NGUYEN VAN E', 'Manager', 'nguyenvane@gmail.com', '77 quan 8, HCM', 986539345, '2018-01-02T00:00:00.000Z', 2147483647, 0, 9000000, 0, ''),
('NV13', 'hÆ°eyrwrwer', 'Leader', '34535345efsdf', '234234', 234234234, '2018-01-02', 234235235, 0, 234234, 0, ''),
('NV44', '34345', 'Staff', '345345', '345345', 34534, '2018-01-02', 345345, 0, 345345, 0, ''),
('NV87', 'nguyen van d', 'Staff', '34234', '234234', 234234, '2018-01-02', 234234, 0, 234234, 0, ''),
('NV90', 'HUY NGUYEN', 'Leader', 'nguyen@gmail.com', '234234', 3534534, '2018-01-03', 4234234, 0, 23423423, 0, ''),
('NV90234', '234234', 'Staff', '23423', '4234', 423423, '2018-01-02', 234234234, 0, 23423423, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `HistoryId` int(10) NOT NULL,
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Status` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='history is where save history of going in and out the office';

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message`) VALUES
('');

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
  `Position` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
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
