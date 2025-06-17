@login
Feature: Login en Sauce Demo
Como cliente de Sauce Demo
quiero iniciar sesión
para navegar por la aplicación

Background:
    Given que estoy en la página de login de Sauce Demo

@hpt
Scenario Outline: Verificar login satisfactorio  - "<CP>"
    When ingreso username "<username>" y password "<password>" y accedo
    Then el inicio de sesión es satisfactorio
    Examples:
    |CP                                | username    | password  |
    |usuario válido,contraseña válida| standard_user    | secret_sauce  |

@unHpt
Scenario Outline: Verificar login insatisfactorio- "<CP>"
     When ingreso username "<username>" y password "<password>" y accedo
     Then el inicio de sesión es insatisfactorio
     Examples:
     |CP                                | username | password  |
     |usuario válido,contraseña inválida| locked_out_user    | secret_sauce$  |
     |usuario inválido,contraseña válida| locked_out_user123    | secret_sauce |
     |usuario inválido,contraseña inválida| locked_out_userl   | secret_sauce%   |
     |usuario bloqueado                   | locked_out_user   | secret_sauce   |
