# Host: localhost  (Version 5.5.5-10.4.14-MariaDB)
# Date: 2021-06-03 20:43:58
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "user"
#

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `radd` int(1) DEFAULT 0,
  `rdel` int(1) DEFAULT 0,
  `rmod` int(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (3,'admin','sha256$I4U3ndci$4e6a512fccb8ee7815a7b220822335be0f44af0bc765a4cc812f1bef8441028f','administrator',1,1,1),(4,'user1','sha256$V6rIt6Z2$96958e0fc1965041a89e1fbc214c4ceb707d7c9cc6084ce173b992c7474ffc93','user #1',1,0,0),(5,'user2','sha256$i4QvimsK$26c67e01fee286e5c24804a9dfa378bc2c92767eec623870f44ac20c68a3931f','user #2',0,1,1);
