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
  `date_blog` date NOT NULL,
  `empID` int DEFAULT NULL,
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
INSERT INTO `tbl_blog` VALUES (1584624954382,'Popular hacks all over the internet that are useless!','If you are among those serious people who try to seek life hacks or beauty hacks because you want to save some money, let me tell you…You would be wasting your 1 hour of precious ','<p>If you are among those&nbsp;serious people&nbsp;who try to seek life hacks or beauty hacks because you want to save some money, let me tell you&hellip;You would be wasting your&nbsp;1 hour of precious life. It&rsquo;s always a better option to spend money on things that you need, instead of depending on Troom Troom! You know the kind of hacks they present to you. They basically make money creating shitty videos and has nothing to do with protecting your life with some &ldquo;quick-easy&rdquo; hacks. Troom Troom hacks are disgustingly alien!</p>\n\n<p>Though some of the hacks really work,&nbsp;but the lists that I have presented to you below is something you really don&rsquo;t wanna try! These are not just any life hacks or beauty hacks, these are those hacks that are REALLY popular and its been repeated over and over again on the internet. You&rsquo;ll see them on every social platform. I just don&rsquo;t get how can these help people when it has zero benefits to you!</p>\n','Popular-hacks-all','2020-03-19',NULL),(1584625074083,'The Truth Behind Pharmaceutical Industry','What you are about to read will shock you more than anything, as it did with me when I realized about the heinous truth of Pharmaceutical Industries. My research came from watching','<p>As per our trained mind, we know that medicines help to cure our illness. Right? But what if I say that we have always been kept blindfolded about prescriptions. You fall ill and rush to a well-degreed&nbsp;doctor for a checkup. He&rsquo;ll prescribe you a medicine and you get well maybe after two or three days.&nbsp; You will be more than escalated to see your health recovering!</p>\n\n<p>Now imagine a situation where the same doctor comes to you and mention after your recovery that he gave you sugar pills. All the prescribed medicines were actually sugar pills and none work for your ailments. What would be your thoughts? Would you ask yourself about your illness that whether you actually fell ill or would you rather try to find out what could be the reason that cured your illness with a sugar pill?</p>\n\n<p>&nbsp;</p>\n\n<p>We think that we take pills because we need to cure our illness but in reality, none of the medicines in the world can cure illness. Medicines work to eradicate the symptoms and not the disease. The thing is medicines don&rsquo;t work on symptoms either. It makes our body react to it as if the medicines would be your lifetime support. Hey Dude! Am not kidding about it. You&rsquo;ll get to see more!</p>\n','The-Truth-Behind','2020-03-19',NULL),(1584625268564,'How Millennials Are Becoming Millionaire','Okay, I won’t go with all the achievements that millennials made so far and what distinguishes them from other generations. Putting it simply, millennials are those who were born ','<p>Millennials are different from all other generations and, Buddy! you know the&nbsp;best&nbsp;when you had a clash with people much much elder than you. Millennial has got their own way of thinking which very much segregates them from other world. They tend to be tolerant of difference. By difference, I mean, this generation knows that they are very much different from other generations and have the capability to make some changes into the world. Though millennial is a very cool generation to look at from outside but from inside you will find a few accusations from other generation that we (the millennials) are bound to get suffocated. Born with the philosophy of &ldquo;be yourself&rdquo; and &ldquo;follow your dreams,&rdquo;&nbsp; millennials are thrust into the entitlement of being narcissism&hellip; Umm! I think am dragging myself too much into the problems of millennial. Let&rsquo;s get straight to the point.</p>\n','How-Millennials-Are','2020-03-19',NULL),(1584625367957,'Dogs can be vegan! Want to know about their diet plan?','DOGS! I know dear, you have got your cute little (or maybe big one) dog and you don’t want to give your dog the meal that you are completely against of. That’s why you search for “','<p><strong>DOGS!&nbsp;</strong>I know dear, you have got your cute little (or maybe big one)&nbsp;<strong>dog</strong>&nbsp;and you don&rsquo;t want to give your&nbsp;<strong>dog</strong>&nbsp;the meal that you are completely against of. That&rsquo;s why you search for&nbsp;<em>&ldquo;Can dogs be vegan&rdquo;</em>?&nbsp; A lot of question pops up when you think about the canines. By nature,&nbsp;canine&nbsp;animals have got teeth which helps them for ripping and tearing flesh.&nbsp; So, most of us think that by no means&nbsp;<strong>dogs</strong>&nbsp;can be vegan! But, let me give you a good news. Your&nbsp;<strong>dog</strong>, just like you, will start adoring other species and will only thrive on a plant-based diet.</p>\n\n<p>And one more thing, if you want your&nbsp;<strong>dog</strong>&nbsp;to live for longer life, you need to shift from meat to plant-based food. Before proceeding to the actual diet plan of your dog, let me tell you one thing. If your dog is grown enough to accustomed to the meat products then it would be a little bit tough for him/her to understand why there is no scent of meat for so long. But don&rsquo;t worry! Just go slowly and make them understand. And am always there to&nbsp;help&nbsp;you.</p>\n','Dogs-can-be','2020-03-19',NULL),(1584630204547,'Dogs can be vegan! Want to know about their diet plan?','DOGS! I know dear, you have got your cute little (or maybe big one) dog and you don’t want to give your dog the meal that you are completely against of. That’s why you search for “','<p><strong>DOGS!&nbsp;</strong>I know dear, you have got your cute little (or maybe big one)&nbsp;<strong>dog</strong>&nbsp;and you don&rsquo;t want to give your&nbsp;<strong>dog</strong>&nbsp;the meal that you are completely against of. That&rsquo;s why you search for&nbsp;<em>&ldquo;Can dogs be vegan&rdquo;</em>?&nbsp; A lot of question pops up when you think about the canines. By nature,&nbsp;<a href=\"https://en.wikipedia.org/wiki/Dog\" target=\"_blank\">canine</a>&nbsp;animals have got teeth which helps them for ripping and tearing flesh.&nbsp; So, most of us think that by no means&nbsp;<strong>dogs</strong>&nbsp;can be vegan! But, let me give you a good news. Your&nbsp;<strong>dog</strong>, just like you, will start adoring other species and will only thrive on a plant-based diet.</p>\n','Dogs-can-be-1','2020-03-19',NULL);
/*!40000 ALTER TABLE `tbl_blog` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-19 20:40:31
