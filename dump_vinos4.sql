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
INSERT INTO `categorias` VALUES (1,'Destacados'),(2,'+ Vendidos'),(3,'+ Económicos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cavas`
--

DROP TABLE IF EXISTS `cavas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cavas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioId` int(11) NOT NULL,
  `VinoId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cavas`
--

LOCK TABLES `cavas` WRITE;
/*!40000 ALTER TABLE `cavas` DISABLE KEYS */;
/*!40000 ALTER TABLE `cavas` ENABLE KEYS */;
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
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos`
--

LOCK TABLES `tipos` WRITE;
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` VALUES (1,'administrador'),(2,'cliente');
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `contrasenia` varchar(500) NOT NULL,
  `tipo_id` int(11) NOT NULL,
  `imagen` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `tipo_id` (`tipo_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipo_id`) REFERENCES `tipos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (10,'General Admiral Aladeen','gaa@gmail.com','$2a$10$XwUPWee4IHgOqBTmMmVSQ.8KIEsN/4VKFu4uwz7ckDcOfqldtWMoO',2,'/images/img-users/1646318302686_img_.jpeg'),(11,'Cosme Fulanito','cosmefulanito@gmail.com','$2a$10$429uqaAwwd5Z/YpK2GRxT.psddykj5W6bEhfi3Pmt2erVyFY7HsY.',1,'/images/img-users/1646318669986_img_.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vinos`
--

LOCK TABLES `vinos` WRITE;
/*!40000 ALTER TABLE `vinos` DISABLE KEYS */;
INSERT INTO `vinos` VALUES (1,'Saint Felicien',2,2019,'Esta línea de vinos Saint Felicien contempla varias cepas, la clásica que fue el Cabernet Sauvignon, luego apareció el Malbec, el Cabernet Merlot, el Syrah y el Cabernet Franc. Son vinos con una complejidad que los hace únicos.',1700,'/images/img-products/vino9.jpeg',50,1,2),(2,'Apalta',5,2018,'Apalta, es un vino con notas de cata, a la vista se destaca su color rojo leve amoratado intenso contundente Nariz dulce con frutos rojos predominio frambuesa fresca se siente buena acidez Boca intensa, equilibrada, acidez aumentada, aparece esa fruta roja, inunda toda la boca y se queda en región posterior de lengua.',2000,'/images/img-products/vino4.jpeg',20,5,2),(3,'Tierras Altas',3,2018,'Un vino perfecto para acompañar tus momentos!',1000,'/images/img-products/vino1.jpeg',45,2,3),(4,'Allende Lopez',6,2019,'Allende Lopez es un Gran Vino que se origina en el corazón de Gualtallary, en el Valle de Uco. Elaborado para celebrar los primeros 10 años del emprendemiento de dos amigos Alejandro Allende y José Federico Lopez. Este vino proviene de uvas preseleccionadas de viñedos propios, 18 meses añejado en barricas de roble francés y 12 meses de estiba en botella. Expresa el carácter fuerte y profundo de ese lugar tan particular de Los Andes.',3000,'/images/img-products/vino7.jpeg',25,7,1),(5,'Ojo Negro',1,2019,'Las noches frías, los dias cálidos y el suelo arenoso, mineralizado del Rio Negro son la esencia de nuestro terroir en el valle medio cerca de Choel Choel en la Patagonia, desde donde las uvas de nuestro exclusivo Sauvignon Blanc están creciendo.',1800,'/images/img-products/vino3.jpeg',15,5,3),(6,'Malo Malo',3,2020,'Malo Malo es un cuento del escritor ecuatoriano Enrique Gil Gilbert, publicado en 1930 como parte del libro de relatos Los que se van. Es considerado uno de los cuentos representativos del realismo social ecuatoriano de la década de 1930.',2000,'/images/img-products/1645394199456_img_.jpeg',10,3,3),(8,'Tuerca',1,2018,'gaeljg',1100,'/images/img-products/1645331507980_img_.jpg',111,1,1);
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

-- Dump completed on 2022-03-03 12:22:36
