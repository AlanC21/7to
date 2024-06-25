-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2024 a las 05:14:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `club_nautico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barco`
--

CREATE TABLE `barco` (
  `matricula` varchar(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `num_amarre` int(11) DEFAULT NULL,
  `cuota_amarre` float DEFAULT NULL,
  `id_socio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patron`
--

CREATE TABLE `patron` (
  `id_patron` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salida`
--

CREATE TABLE `salida` (
  `id_salida` int(11) NOT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  `destino` varchar(100) DEFAULT NULL,
  `matricula_barco` varchar(20) DEFAULT NULL,
  `id_patron` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio`
--

CREATE TABLE `socio` (
  `id_socio` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barco`
--
ALTER TABLE `barco`
  ADD PRIMARY KEY (`matricula`),
  ADD KEY `id_socio` (`id_socio`);

--
-- Indices de la tabla `patron`
--
ALTER TABLE `patron`
  ADD PRIMARY KEY (`id_patron`);

--
-- Indices de la tabla `salida`
--
ALTER TABLE `salida`
  ADD PRIMARY KEY (`id_salida`),
  ADD KEY `matricula_barco` (`matricula_barco`),
  ADD KEY `id_patron` (`id_patron`);

--
-- Indices de la tabla `socio`
--
ALTER TABLE `socio`
  ADD PRIMARY KEY (`id_socio`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `barco`
--
ALTER TABLE `barco`
  ADD CONSTRAINT `barco_ibfk_1` FOREIGN KEY (`id_socio`) REFERENCES `socio` (`id_socio`);

--
-- Filtros para la tabla `salida`
--
ALTER TABLE `salida`
  ADD CONSTRAINT `salida_ibfk_1` FOREIGN KEY (`matricula_barco`) REFERENCES `barco` (`matricula`),
  ADD CONSTRAINT `salida_ibfk_2` FOREIGN KEY (`id_patron`) REFERENCES `patron` (`id_patron`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
