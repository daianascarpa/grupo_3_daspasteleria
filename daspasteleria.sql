CREATE DATABASE  IF NOT EXISTS `daspasteleria` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `daspasteleria`;
-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: daspasteleria
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (1,'Tortas'),(2,'Tartas'),(3,'Muffins'),(4,'Cookies y Masas');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_description` text NOT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `image` text NOT NULL,
  `small_price` float NOT NULL,
  `big_price` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cupcakes Emoji','Cupcakes de emojis personalizados',3,'cupcakes_emoji3.jpg',2000,3800),(2,'Chocotorta','Super chocotorta con ganache de chocolate, marroc, ferrero roche y mantecol',1,'chocotorta1.jpg',3500,5000),(3,'Cheesecake',' Cheesecake tipo New York con frutos rojos',1,'image-1662320862257.jpg',4500,5500),(4,'Apple Crumble','Tarta de manzanas y nuez',2,'apple_crumble1.jpg',2500,3500),(5,'Lemon Pie con Arándanos','Clásico lemon pie con arándanos',2,'lemon_pie_arandanos2.jpg',2500,3500),(6,'Marquise','Torta marquise con frutos rojos',1,'marquise1.jpg',3600,5000),(7,'Cupcakes Green','Cupcakes temáticos flores verdes',3,'cupcakes_verdes1.jpg',2000,3800),(9,'Alfajorcitos','Alfajores de maicena rellenos de dulce de leche',4,'image-1664849484425.jpg',2000,3500),(10,'Pastafrola','Pastafrola rellena de membrillo',2,'image-1664849602187.jpg',3000,4000);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_categories`
--

DROP TABLE IF EXISTS `user_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_categories`
--

LOCK TABLES `user_categories` WRITE;
/*!40000 ALTER TABLE `user_categories` DISABLE KEYS */;
INSERT INTO `user_categories` VALUES (1,'Administrador/a'),(2,'Cliente');
/*!40000 ALTER TABLE `user_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `user_password` text NOT NULL,
  `repeat_password` text NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `avatar` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `user_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'daiana@gmail.com','$2a$10$XlO4ZVhxmZS36BJ9l4rVhOmUhiv/rOX1al8LqRg4T.V89Z8l1Ifc2','$2a$10$L6vgS.mrbyVsrMluor05zuCvizMb7m9UVsC5KvBuPyoR5rROq7.aC','Daiana Lorena',1,'avatar-1662332780734.jpg'),(7,'lorena@gmail.com','$2a$10$0CBbbAfrcehTGmUvUU2oAe77SJB7Um0rMTK6KgSD9Kmz9Rn6eTHue','$2a$10$HSDHby5iYpU.CKxm5tIbteQFTEUem0f2DrI4bGViDGlrjshqx9lBa','Lorena',2,'avatar-1661732859892.jpeg'),(8,'dai@gmail.com','$2a$10$139jAr7yg74QQg.4EZHMnOb3nB3LdM5jvK1AqbsiCo.w8o2AyCJeO','$2a$10$tBG0PcAnm9/opCdp5eAVIewJOvzAhO9TxZKPFQeBvVq.QcC4LWDwi','Dai',2,'avatar-1661743364201.jpg'),(10,'daiprueba@gmail.com','$2a$10$OtPBO38v/1BP5YU39G8hBexIn/re2c1d8Clvux43aIRI6nbSJbydG','$2a$10$1xea5iGbO..MSQF6GoXRfO1X.fue7c.PBHrcg0em58AHhnaaohRpq','Dai Prueba 3',2,'perfil_default.JPG'),(12,'d@gmail.com','$2a$10$9fnzJt4QQd8NXMPJuNFyAekIsIxT32L5rAgPI8aa6QNXvocB7C4T2','$2a$10$lx/tpjVCceV2L6juskLoR.HqebrhLt0hcYUEWwtckib2IEG221H4i','Daiana',2,'perfil_default.JPG'),(13,'palmito@gmail.com','$2a$10$SNl6JYmXbDBl7D63Xgg3VOdkmgj9ShNhqo1QiSdgCdcIyXQmyftJ2','$2a$10$J8bFRxV4KFajgZwj0dT73..JKT.uRhzplcPBGB/oM42JIVjipdMCK','Palmito            ',2,'perfil_default.JPG'),(14,'palmito2@gmail.com','$2a$10$QjZ4SJhpxDSR4Y7GmiLmqe5scXl/pMlaDezXSq5tR32.jyvHPvI9i','$2a$10$6AdV8scQcXZDyEV/hkPMzOB77gj8TnZ6FhFoH3/BtkZIm4eomgNxC','Palmito 2           ',2,'perfil_default.JPG'),(15,'palmito3@gmail.com','$2a$10$moBgJbmC87Z5Fjj6fJnxK.9SS9QTyFCzju.lRXhAdZSq9.4Q6qre.','$2a$10$c9.W6qMHAokGpOEZ.0u01uc7bQMTIffq63EEh1/fnuRaq9/rlvS9u','Palmito 3          ',2,'perfil_default.JPG');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'daspasteleria'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-04  1:54:47
