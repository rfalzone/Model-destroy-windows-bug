# Sails .Destroy({}) bug on windows

When a widget is created using the provided API endpoint, subsequent attempts to destroy the widget using the appropriate API endpoint fail to successfully remove it from the database. This issue specifically affects the Windows 10 operating system.

Creating a widget: POST /widget
Destroying all widgets: DELETE /widget/all

## Installation

npm run install

## Start Server

npm run start

## Start Cypress

npm run test
