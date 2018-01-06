-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2018 at 12:22 PM
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
('NV01', 'Le Ngoc Huy', 'Staff', 'lehuy.paul@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-01', 11111111, 0, 8000000, 0, ''),
('NV05', 'NGUYEN VAN E', 'Leader', 'nguyee@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 12000000, 0, ''),
('NV09', 'NGUYEN VAN H', 'Staff', 'nguyenh@gmail.com', '7 street, Hiep Binh Chanh Wards, Thu Duc District', 985752395, '2018-01-02', 2147483647, 0, 9000000, 0, ''),
('NV11', 'NGUYEN VAN K', 'Leader', 'NGUYENK@GMAIL.COM', '55 QUAN 10', 98432334, '2018-01-02', 234234234, 0, 120000000, 0, ''),
('NV44', '34345', 'Staff', '345345', '345345', 34534, '2018-01-02', 345345, 0, 345345, 0, ''),
('NV90', 'HUY NGUYEN', 'Leader', 'nguyen@gmail.com', '234234', 3534534, '2018-01-03', 4234234, 0, 23423423, 0, ''),
('NV90234', '234234', 'Staff', '23423', '4234', 423423, '2018-01-02', 234234234, 0, 23423423, 0, ''),
('NV903', 'LE HUY', 'Staff', '324234', '24234', 94234, '2018-01-03', 234234, 0, 234234, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `HistoryId` int(10) NOT NULL,
  `EmployeeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(1) NOT NULL,
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
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(''),
(' '),
(' '),
('\0NV02,24012013 '),
(' '),
('\0NV05,24012013 '),
('	\0NV15,24012013\n\n '),
(' '),
('	\0NV45,24012013\n\n '),
(' '),
(' '),
(' '),
(' '),
(' '),
(' '),
('\0NV745,24012013 '),
(' '),
('History.\0NV795,24012013 '),
(' '),
(' '),
(' '),
(' '),
(' '),
('History.\0NV795,24012013 '),
('History.\0NV795,24012018 '),
('History.\0NV795,24012016 '),
('History.\0NV795,24012016 '),
('History.\0NV795,24012016 '),
(' '),
('History.\0NV795,24012016 '),
('<br />\n<b>Warning</b>:  stream_socket_client(): php_network_getaddresses: getaddrinfo failed: No suc');

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
  `Month` int(2) NOT NULL,
  `Year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`ID`, `Name`, `EmployeeID`, `Salary`, `Bonus`, `Position`, `Month`, `Year`) VALUES
(1, 'LE NGOC HUY', 'NV01', 10000000, 100000, 'Leader', 0, 0);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
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
