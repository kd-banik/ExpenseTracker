CREATE DATABASE  IF NOT EXISTS `db_blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_blog`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_blog
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `img_blog`
--

DROP TABLE IF EXISTS `img_blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `img_blog` (
  `img_id_blog` int NOT NULL COMMENT 'uploaded image id',
  `img_name_blog` text COMMENT 'name/title for image',
  `img_data_blog` longblob COMMENT 'Image itself',
  `id_blog` bigint DEFAULT NULL,
  PRIMARY KEY (`img_id_blog`),
  KEY `id_blog` (`id_blog`),
  CONSTRAINT `id_blog` FOREIGN KEY (`id_blog`) REFERENCES `tbl_blog` (`id_blog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='For storing jpg, jpeg, mpeg, png, etc. files uploaded in the blog';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_blog`
--

LOCK TABLES `img_blog` WRITE;
/*!40000 ALTER TABLE `img_blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `img_blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `empID` int NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `designation` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `password1` varchar(45) NOT NULL,
  PRIMARY KEY (`empID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_blog`
--

DROP TABLE IF EXISTS `tbl_blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_blog` (
  `id_blog` bigint NOT NULL COMMENT 'blog article id (for storing timestamp value)',
  `title_blog` text NOT NULL COMMENT 'Heading of blog. Will be stored as slug value also.',
  `brief_blog` mediumtext NOT NULL COMMENT 'short description for the blog',
  `content_blog` longtext NOT NULL COMMENT 'Blog articles/stories/writing along with pictures',
  `slug_blog` text NOT NULL COMMENT 'Slug value from blog URL',
  `date_blog` timestamp NOT NULL,
  `empID` int NOT NULL,
  PRIMARY KEY (`id_blog`),
  KEY `empID_idx` (`empID`),
  CONSTRAINT `empID` FOREIGN KEY (`empID`) REFERENCES `registration` (`empID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_blog`
--

LOCK TABLES `tbl_blog` WRITE;
/*!40000 ALTER TABLE `tbl_blog` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_blog'
--

--
-- Dumping routines for database 'db_blog'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-18 13:59:28
