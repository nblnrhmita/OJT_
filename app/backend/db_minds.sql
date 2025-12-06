-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2025 at 07:22 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_minds`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES
(2, 'user1@gmail.com', '$2b$10$E9ykKAiPYOj1BsKyRG0iae3JXSBS0DEylRz/F/O4tip8n3lcCMo4G', 'user1'),
(3, 'user2@gmail.com', '$2b$10$YMGZyjPM5wTConXXLnl9FOIsdITDH1cXV1Z.tlHxurL/dRT.L0oe6', 'user2'),
(4, 'user3@gmail.com', '$2b$10$jK.XdKbfOAV2MydtEUMkvutHAmvZyRinQoTBouvX2hYTcX4uRt8Li', 'user3'),
(5, 'user4@gmail.com', '$2b$10$I2KpY7d/MtfsUm.65YbfNOGeKMabNuGBreqe.29CWGtgcfLchcVEq', 'user4'),
(6, 'user6@gmail.com', '$2b$10$qkSCQvluAV7rHSSjzlCfZulKo/xejbsUOzyQJCU9qgHT.lLRtYoW.', 'user6'),
(7, 'user7@gmail.com', '$2b$10$F84Xfeo/r5RpzAF1862fyObaCs.Q63XYPvgm/WrgOW5KAtWTqMER.', 'user7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
