CREATE DATABASE  IF NOT EXISTS `wineria_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `wineria_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: wineria_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `year` varchar(4) NOT NULL,
  `bodega` varchar(250) NOT NULL,
  `type_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `alcohol` int(11) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `status` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `types_id_idx` (`type_id`),
  KEY `regions_id_idx` (`region_id`),
  CONSTRAINT `regions_id` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `types_id` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Vino Bressia Red Blend','2020','Bressia',1,1,1400.00,3,13,'Es un vino de color rojo profundo intenso con tonos púrpuras. En nariz presenta un balanceado equilibrio varietal, donde se destacan los aromas a moras, frambuesas y una elegante presencia de madera. En boca se ofrece muy amplio, de gran volumen y consistente. Recomendamos decantar este vino al menos una hora antes de beberse. Temperatura de servicio 17 °C.','vino-bressia-red-blend.jpg',4,1),(2,'Vino Angelica Zapata Malbec','2020','Catena Zapata',1,1,2000.00,25,14,'Angélica Zapata Malbec es un blend proveniente de uvas Malbec de diferentes viñedos. El resultado es un vino de gran concentración y elegancia. El viñedo Angélica aporta aromas de ciruelas maduras, mermelada de frutos rojos, suavidad y volumen al paladar. La temperatura adecuada para su consumo es entre 16º y 18º C.','vino-angelica-zapata-malbec.jpg',4,1),(3,'Vino LTU Wines Malbec','2020','LTU Wines',1,1,2349.00,20,14,'Este gran vino nace únicamente de grandes añadas y es un Single Vineyard de Malbec. De intenso color violeta. Bien complejo, con gran concentración y balance. Se destacan notas frescas a arándanos y cassis combinado con aromas más maduros como higos tosta. La temperatura adecuada para su consumo es entre 16º y 18º C.','vino-ltu-wines-malbec.jpg',26,1),(4,'Vino Las Perdices Reserva Pinot','2020','Las Perdices',1,1,1200.00,12,14,'Rojo violáceo, concentrado y brillante. Aromas de frutos del bosque maduros, especias y dejos balsámicos con tonos de ciruelas maduras y fondo tostado. Paladar resuelto que fluye sabroso y expresivo. Centro de boca jugoso con buen cuerpo y taninos redondos. Final largo de regusto balsámico y frutal.','vino-las-perdices-reserva-pinot.jpg',10,1),(5,'Zuccardi Blanc de Blancs','2020','Familia Zuccardi',1,1,1200.00,5,13,'De color amarillo verdoso, presenta una constante fina y continua cadena de burbujas. El largo tiempo en levadura aporta complejidad, miel, fruta blanca, típica del Chardonnay proveniente de Tupungato, pan tostado, manteca y bizcochuelo. De gran volumen en boca. Las notas a miel se hacen presentes nuevamente, combinándose con notas a cereales. Temperatura de servicio para este vino es entre 6º y 8º C.','default-image.png',9,1),(6,'Alma Negra Brut Nature','2020','Ernesto Catena Vineyards',1,1,1000.00,2,13,'Dorado con reflejos acerados. Intensidad aromática, frutal y con notas a tostados. Envolvente, con una acidez ligera que le brinda frescura. La temperatura adecuada para su consumo es entre 6º y 7º C.','default-image.png',2,1),(7,'Luigi Bosca Brut Nature','2020','Luigi Bosca',1,1,1200.00,0,13,'De color dorado claro, con aroma fresco que recuerda a manzana verde y durazno blanco. También tiene algunas notas cítricas y de levadura. Burbujas delicadas y finas que permanecen en la copa. La temperatura adecuada para disfrutar este espumante es de 6º C.','default-image.png',10,1),(8,'Vino toro','2020','TORO',1,4,150.00,10,11,'Un buen vino toro','vino-toro.jpg',20,1),(9,'Cosecha Tardia Blanco','2020','Norton',1,4,200.00,20,10,'Un buen vino dulce','cosecha-tardia-blanco.jpg',20,1),(14,'Prueba3','2010','Sancho Panzasss',1,3,150.00,22,12,'Es una gran prueba ddddddd','image-1598130743011.png',15,0),(15,'juan','2019','Sancho Panza',2,4,120.00,10,12,'Es una gran prueba','image-1598131004078.jpg',15,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES (1,'Mendoza'),(2,'San Juan'),(3,'Cordoba'),(4,'Argentina'),(5,'Chile');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Vino'),(2,'Whisky'),(3,'Cerveza'),(4,'Champagna');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_category` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (0,'cliente'),(1,'administrador');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `category` int(11) unsigned NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `status` tinyint(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `category_idx` (`category`),
  CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `user_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Valentin','Casa','valentin@gmail.com','$2b$10$gwPlnzHuuii3ZuwOXBXQU.bLBSr5/JcuRfU6Syci3g3YAR2LzktLC',0,NULL,1),(2,'Juan Pablo','Casa','juanpablocasa.lca@gmail.com','$2b$10$2VvaF1cpL7JoauGZHcc30.AzQJhQWag/lX4GxHdsWTnHMthExKiSe',1,NULL,1),(3,'Tomas','Jais','tomijais@gmail.com','$2b$10$zcaUZCfuPenQptMVFJVSQO3Al2UGczQczsEzHHNRVhXD9ADryy85C',1,NULL,1),(4,'Carla','Rocca','carlasolrocca@gmail.com','$2b$10$Y9NNwswaWJJDgzje3PB9nexyoqPCxTvQ02ZvjAgSd7vtL7nR2FTdK',1,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-27 23:49:51
