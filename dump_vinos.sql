-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: vinos_db
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administradores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `contrasenia` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'Cosme Fulanito','cosmefulanito@gmail.com','$2a$10$MGAcImE.uwVmHQsKtw4uH.zsfT3ZWZSomoruwn/69A/Jr7xMlyD/m');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodegas`
--

DROP TABLE IF EXISTS `bodegas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodegas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodegas`
--

LOCK TABLES `bodegas` WRITE;
/*!40000 ALTER TABLE `bodegas` DISABLE KEYS */;
INSERT INTO `bodegas` VALUES (1,'Zuccardi'),(2,'Catena Zapata'),(3,'Trapiche'),(4,'El Enemigo'),(5,'El Esteco'),(6,'Salentein'),(7,'Luigi Bosca');
/*!40000 ALTER TABLE `bodegas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Popular'),(2,'Nuevo'),(3,'Ninguno');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `contrasenia` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Charline Antrum','cantrum0@mayoclinic.com','4dcmzOf3q0'),(2,'Penelopa Curzon','pcurzon1@skype.com','VQxBfDjiOk'),(3,'Maryanne Chiverstone','mchiverstone2@mashable.com','f3AO9RGMH'),(4,'Jim Kmietsch','jkmietsch3@cocolog-nifty.com','uXxNt9'),(5,'Debbie Girtin','dgirtin4@java.com','kyXE102T7xc'),(6,'Inesita Apfler','iapfler5@buzzfeed.com','YUZj0aF'),(7,'Carlita Thumnel','cthumnel6@kickstarter.com','2TWMWEref'),(8,'Salli Gilligan','sgilligan7@e-recht24.de','2Mbg8M'),(9,'Leland Shakesby','lshakesby8@sciencedirect.com','kIanF5d2q6M4'),(10,'Bonnibelle Fulton','bfulton9@goo.gl','QPf7Z0Gglg9'),(11,'Anett Merriott','amerriotta@intel.com','afKGidC'),(12,'Cristabel Collymore','ccollymoreb@delicious.com','YBCKbFdWbP6'),(13,'Aaren Zanini','azaninic@wufoo.com','gIgWV2AbUG7'),(14,'Hayward Sunshine','hsunshined@nsw.gov.au','zdIzbyW7'),(15,'Guinna O\'Heagertie','goheagertiee@princeton.edu','ZdMWAILe'),(16,'Viva Collaton','vcollatonf@wix.com','KUhwhC'),(17,'Mike Chaim','mchaimg@fda.gov','5yMNOen0Tp'),(18,'Joby Prattin','jprattinh@github.io','D8cVjdPAS5n'),(19,'Tracie Wyeld','twyeldi@eventbrite.com','60hrLqW2CHCf'),(20,'Miquela Jestico','mjesticoj@de.vu','VW3BRBqoYyF9'),(21,'Hermie Duckels','hduckelsk@reverbnation.com','xgd6xy9c0'),(22,'Corilla Keers','ckeersl@sun.com','TwRWMebhi'),(23,'Wallie Sarjeant','wsarjeantm@hatena.ne.jp','I0cS3SDBDj'),(24,'Paloma Connerly','pconnerlyn@admin.ch','fqpaW0LrvoR'),(25,'Rodrigo Garred','rgarredo@epa.gov','BgnDvAcv0Iw'),(26,'Ranee Wickersham','rwickershamp@prlog.org','7Ol0DnVte'),(27,'Egon Gergus','egergusq@cbslocal.com','xQDi3Tc4'),(28,'Stacy Blazic','sblazicr@apple.com','AjmiCt7lVO2'),(29,'Dore Scorah','dscorahs@4shared.com','TUWNmB2c'),(30,'Adolph Rainger','araingert@accuweather.com','JEeiF7oDJv6'),(31,'Esma Freddi','efreddiu@weebly.com','5qeFuj2'),(32,'Ania Snadden','asnaddenv@epa.gov','gPC0neJ6'),(33,'Alberta Shildrake','ashildrakew@ebay.co.uk','KqMoDdDNni9Z'),(34,'Dorice Waywell','dwaywellx@about.com','IQ1MZf3kgQD'),(35,'Fania Ensor','fensory@ebay.com','2wmM5UepAM'),(36,'Wenda Courson','wcoursonz@ameblo.jp','HIXpg7fHJfBF'),(37,'Stearn Reditt','sreditt10@example.com','E2gccfi4NQ'),(38,'Xena Bemand','xbemand11@omniture.com','0EIEM4PRuxm'),(39,'Nicolis Spreadbury','nspreadbury12@xing.com','TsJvicejOB'),(40,'Chryste Foulsham','cfoulsham13@twitter.com','uIJ4vbwRB46'),(41,'Carissa Millhill','cmillhill14@amazon.de','DFIyrWrkvj'),(42,'Cort Niset','cniset15@hugedomains.com','gfB42IPrR0'),(43,'Page Redihalgh','predihalgh16@google.ru','blnh1xOV1OB'),(44,'Doralynne Ligoe','dligoe17@engadget.com','mZtS5DtFxic'),(45,'Ronnica Stone Fewings','rstone18@scientificamerican.com','ZZ5UnQr0f'),(46,'Belvia Dimitrescu','bdimitrescu19@ucoz.ru','3BnVmh'),(47,'Maurits Piquard','mpiquard1a@amazon.de','xbNqebff'),(48,'Jammal Baudoux','jbaudoux1b@yahoo.com','JJmCGqkAFeWb'),(49,'Bo Dance','bdance1c@issuu.com','m70j845wt9'),(50,'Giusto Lynagh','glynagh1d@quantcast.com','i9nxt4O0La83'),(51,'Carlos Sosa','carlossosa@gmail.com','$2a$10$u0TMZKC00pmj0WeuHwhKVupmSFDJAvj2XNsl7DcH4hx8wdP1LOG.S');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas_de_compras`
--

DROP TABLE IF EXISTS `facturas_de_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facturas_de_compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `infoapi_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas_de_compras`
--

LOCK TABLES `facturas_de_compras` WRITE;
/*!40000 ALTER TABLE `facturas_de_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas_de_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uvas`
--

DROP TABLE IF EXISTS `uvas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `uvas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uvas`
--

LOCK TABLES `uvas` WRITE;
/*!40000 ALTER TABLE `uvas` DISABLE KEYS */;
INSERT INTO `uvas` VALUES (1,'Malbec'),(2,'Bonarda'),(3,'Cabernet Sauvignon'),(4,'Merlot'),(5,'Syrah'),(6,'Pinot Noir'),(7,'Chardonnay');
/*!40000 ALTER TABLE `uvas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vinos`
--

DROP TABLE IF EXISTS `vinos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vinos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(600) NOT NULL,
  `bodega_id` int(11) NOT NULL,
  `anio` int(11) NOT NULL,
  `descripcion` varchar(5000) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(400) NOT NULL,
  `stock` int(11) NOT NULL,
  `uva_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `bodega_id` (`bodega_id`),
  KEY `uva_id` (`uva_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `vinos_ibfk_1` FOREIGN KEY (`bodega_id`) REFERENCES `bodegas` (`id`),
  CONSTRAINT `vinos_ibfk_2` FOREIGN KEY (`uva_id`) REFERENCES `uvas` (`id`),
  CONSTRAINT `vinos_ibfk_3` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vinos`
--

LOCK TABLES `vinos` WRITE;
/*!40000 ALTER TABLE `vinos` DISABLE KEYS */;
/*!40000 ALTER TABLE `vinos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06  3:33:03
