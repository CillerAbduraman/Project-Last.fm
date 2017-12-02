SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- Database: `music_management`
CREATE DATABASE `music_management` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `music_management`;
-- --------------------------------------------------------

-- Table structure for table `genres`

CREATE TABLE IF NOT EXISTS `genres` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- --------------------------------------------------------

-- Table structure for table `artists`

CREATE TABLE IF NOT EXISTS `artists` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- Table structure for table `songs`

CREATE TABLE IF NOT EXISTS `songs` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `genreId` smallint(5) DEFAULT NULL,
  `artistId` smallint(5) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `fileName` varchar(100) DEFAULT NULL,
  `playtime` smallint(5) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- Table structure for table `users` - I don't know if I'm gonna use it, because until now I have just one user

CREATE TABLE IF NOT EXISTS `users` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- Table structure for table `playlists`

CREATE TABLE IF NOT EXISTS `playlists` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `userId` smallint(5) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


-- Table structure for table `playlist_songs`

CREATE TABLE IF NOT EXISTS `playlist_songs` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `playlistId` smallint(5) NOT NULL,
  `songId` smallint(5) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createdAt` timestamp,
  `updatedAt` timestamp,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
