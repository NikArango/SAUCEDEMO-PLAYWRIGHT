@youCart
Feature: Verficación del carrito de compras en Sauce Demo
Como cliente de Sauce Demo
quiero Verificar que los productos fueron agregados al carrito
para realizar la compra de los mismos

@checkCart
Scenario Outline: Verificar productos agregados al carrito de compras - "<CP>"
    Given que agrego productos '<productos>' al carrito de compras en la página de productos de Sauce Demo
    When doy click en el ícono del carrito de compras
    Then me redirije a la página de You Cart donde lista los productos '<productos>' que fueron agregados

 Examples:
    |CP                         | productos | 
    |1 producto                 | ["Sauce Labs Backpack"]    | 
    |2 productos                | ["Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"]    |  