Ybaby 🎮

<img src="https://user-images.githubusercontent.com/236501/32385619-bddac0ac-c08c-11e7-9ee4-9c892197191f.png" width="400" />

Francois Poisblaud & Camile Chabert

->  Creer la Base de donnée "ybaby"
->  Changer la connection à la Base de donnée    
      - Dossier iot_ionic_back/config/datastores.js
      - Edit "url: 'mysql://root:123456@127.0.0.1:3306/ybaby'"

# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# H�te: 127.0.0.1 (MySQL 5.7.20)
# Base de donn�es: ybaby-old
# Temps de g�n�ration: 2018-05-24 13:27:57 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table archive
# ------------------------------------------------------------

DROP TABLE IF EXISTS `archive`;

CREATE TABLE `archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table babyfoot
# ------------------------------------------------------------

DROP TABLE IF EXISTS `babyfoot`;

CREATE TABLE `babyfoot` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `max_players` double DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

LOCK TABLES `babyfoot` WRITE;
/*!40000 ALTER TABLE `babyfoot` DISABLE KEYS */;

INSERT INTO `babyfoot` (`createdAt`, `updatedAt`, `id`, `location`, `max_players`, `available`)
VALUES
	(1525265787986,1525265787986,1,'Bordeaux',4,1),
	(1525265787986,1525265787986,2,'Paris',4,0);

/*!40000 ALTER TABLE `babyfoot` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table contact_contacts_contact__group_contacts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact_contacts_contact__group_contacts`;

CREATE TABLE `contact_contacts_contact__group_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_contacts` int(11) DEFAULT NULL,
  `contact_contacts_contact` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `group`;

CREATE TABLE `group` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table match
# ------------------------------------------------------------

DROP TABLE IF EXISTS `match`;

CREATE TABLE `match` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` double DEFAULT NULL,
  `played` tinyint(1) DEFAULT NULL,
  `ongoing` tinyint(1) DEFAULT NULL,
  `red_score` double DEFAULT NULL,
  `blue_score` double DEFAULT NULL,
  `babyfoot` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table match_blue_players__user_blue_players_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `match_blue_players__user_blue_players_user`;

CREATE TABLE `match_blue_players__user_blue_players_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `match_blue_players` int(11) DEFAULT NULL,
  `user_blue_players_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table match_red_players__user_red_players_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `match_red_players__user_red_players_user`;

CREATE TABLE `match_red_players__user_red_players_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `match_red_players` int(11) DEFAULT NULL,
  `user_red_players_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table message
# ------------------------------------------------------------

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table reservation
# ------------------------------------------------------------

DROP TABLE IF EXISTS `reservation`;

CREATE TABLE `reservation` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `babyfoot` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Affichage de la table team
# ------------------------------------------------------------

DROP TABLE IF EXISTS `team`;

CREATE TABLE `team` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;

INSERT INTO `team` (`createdAt`, `updatedAt`, `id`, `name`)
VALUES
	(1525423371453,1525423371453,1,'Baby N°1'),
	(1525440495668,1525440495668,2,'Baby N°2'),
	(1525440544758,1525440544758,3,'Baby N°3'),
	(1525440550359,1525440550359,4,'Baby N°4');

/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `dateOfBirth` double DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `team` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`createdAt`, `updatedAt`, `id`, `email`, `firstName`, `lastName`, `username`, `dateOfBirth`, `sex`, `password`, `team`)
VALUES
	(1525265787986,1525265787986,1,'tgghyh@example.com','Paul','Dupont','human',0,'','YWVzLTI1Ni1nY20kJGRlZmF1bHQ=$0XLkqJa1ySm8hsNP$aEJAH3hv$p9B/BOi5OXS7oiuRUZGkSQ',1),
	(1525423070449,1525423070449,2,'test1@example.com','Nicolas','Martin','Yuka',0,'','YWVzLTI1Ni1nY20kJGRlZmF1bHQ=$KCdptdwJdD3JjnzA$dW/3w0gl$+pFo2M3bdaxulrdZ1JO4EQ',1),
	(1525423093965,1525423093965,3,'test6@example.com','Robert','Michon','Iopa',0,'','YWVzLTI1Ni1nY20kJGRlZmF1bHQ=$C0N0d7m0sqgSV2y3$46bpw0Y1$soor+GEtpEv1DRhJYtk4nA',1),
	(1526639281074,1526639281074,4,'god@gmail.com','Julien','giton','Fifou',0,'','YWVzLTI1Ni1nY20kJGRlZmF1bHQ=$ifTrUk7VSxxrAHyq$GW3X6N6f$uR2hPmrBxvuaSh7DHADjmg',2),
	(1527165375484,1527165375484,7,'test@example.com','My FirstName','LastName','Test Human',0,'','YWVzLTI1Ni1nY20kJGRlZmF1bHQ=$jk7anuE1x35m4Xkz$Ussbp/AD$MrrW/HayLHv+0dkvYGCFbg',2);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table usermatch
# ------------------------------------------------------------

DROP TABLE IF EXISTS `usermatch`;

CREATE TABLE `usermatch` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
