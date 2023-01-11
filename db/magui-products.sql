-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2022 a las 00:09:44
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `tphouse_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `tip` varchar(255) NOT NULL,
  `shipping_id` int(10) UNSIGNED NOT NULL,
  `category_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_description`, `images`, `price`, `tip`, `shipping_id`, `category_id`) VALUES
(1, 'Macarons', 'Dulce francés de harina de almendras a base de merengue con relleno de ganache de frutos o chocolate', '[\"/img/macarons.jpg\",\"/img/macarons2.jpg\",\"/img/macarons3.jpg\"]', 300, 'Mantener en la heladera solo por 3 días', 1, 1),
(2, 'Muffins', ' Mini torta de chocolate, vainilla o red velvet con relleno a elección y cobertura de buttercream o ganache de chocolate ', '[\"/img/muffins2.jpg\",\"/img/muffins3.jpg\",\"/img/muffins4.jpg\"]', 2000, 'Los muffins con buttercream deben permanecer dentro de la heladera, así como los que tengan rellenos frutales', 1, 2),
(3, 'Barra de chocolate', 'Barra de chocolate artesanal, realizado con chocolate cobertura amargo, blanco o semi amargo, con el método de templado por tableado', '[\"/img/chocolate.jpg\",\"/img/chocolateblanco.jpg\",\"/img/chocolate2.jpg\"]', 800, 'Se mantiene a temperatura ambiente y en días de mucho calor se puede poner en refrigeración a no menos de 20° ', 2, 3),
(4, 'Cumple Torta', 'Torta de vainilla rellena de dulce de leche y cubierta con buttercream', '[\"/img/cake.jpg\",\"/img/cake.jpg\",\"/img/cake.jpg\"]', 4000, 'Mantener en la heladera solo por 10 días', 1, 1),
(5, 'Croissants', 'Factura francesa a base de una masa de hojaldre', '[\"/img/croissants.jpg\",\"/img/croissants.jpg\",\"/img/croissants.jpg\"]', 600, 'Mantener en ambiente fresco no más de 24 hs', 1, 2),
(6, 'Chocolate Blanco', 'Barra de chocolate realizada con chocolate cobertura blanca con método de templado por sembrado', '[\"/img/chocolateblanco.jpg\",\"/img/chocolateblanco.jpg\",\"/img/chocolateblanco.jpg\"]', 800, 'Mantener en ambiente fresco', 1, 3),
(7, 'Alfajores', 'Dulce clásico Argentino a base de una masa sableé de chocolate o vainilla, relleno de dulce de leche repostero', '[\"/img/alfajores.jpg\",\"/img/alfajores.jpg\",\"/img/alfajores.jpg\"]', 1500, 'Mantener en ambiente fresco no más de una semana', 1, 2),
(8, 'Torta bomba', 'Genoisse de cacao con relleno de buttercream de café y cobertura de ganache de chocolate con leche', '[\"/img/pasteleria.jpg\",\"/img/pasteleria.jpg\",\"/img/pasteleria.jpg\"]', 4000, 'Mantener en heladera no más de 72 hs', 1, 1),
(9, 'Chocolate con leche', 'Barra de chocolate cobertura con leche templado con método de tableado', '[\"/img/chocolate2.jpg\",\"/img/chocolate2.jpg\",\"/img/chocolate2.jpg\"]', 800, 'Mantener en ambiente fresco', 1, 3),
(10, 'Mousse de Maracuyá', 'Base de brownie con mousse de Maracuyá y naranja', '[\"/img/1658880781854.jpg\",\"/img/1658880781871.jpg\",\"/img/1658880781893.jpg\"]', 2500, 'Mantener en ambientes frios o heladera', 2, 1),
(11, 'Box Francés', 'Box de degustación, contiene: 2 Macarons, 4 eclairs y 4 bombones de chocolate rellenos de ganache frutal', '[\"/img/1658881089641.jpg\",\"/img/1658881089655.jpg\",\"/img/1658881089680.jpg\"]', 1500, 'Mantener a temperatura ambiente', 2, 1),
(12, 'Bombones rellenos', 'Caja de 12 bombones de chocolate, con relleno a elegir', '[\"/img/1658881736955.jpg\",\"/img/1658881737012.jpg\",\"/img/1658881737068.jpg\"]', 1500, 'Mantener a temperatura ambiente', 1, 3),
(13, 'Pan de Campo', 'Pan de campo en dos formas distintas ', '[\"/img/1658882088328.jpg\",\"/img/1658882088359.jpg\",\"/img/1658882088380.jpg\"]', 100, 'Mantener siempre dentro de la bolsa hasta el momento de consumirlo', 2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shipping_id` (`shipping_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shipping_id`) REFERENCES `shippings` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;
