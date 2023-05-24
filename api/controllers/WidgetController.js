/**
 * WidgetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// Function to create a new widget
async function createWidget(req, res) {
  try {
    // Extract necessary data from the request body
    const { name, description, price } = req.body;
    // Create a new widget object
    const widget = await Widget.findOrCreate(
      {
        name,
        description,
        price,
      },
      {
        name,
        description,
        price,
      }
    );
    // Return the created widget as the API response
    res.ok(widget);
  } catch (error) {
    // Handle any errors that occurred during the creation process
    res.status(500).json({ error: "Failed to create widget" });
  }
}

// Function to destroy all widgets
async function destroyAllWidgets(req, res) {
  try {
    // Delete all widgets from the database
    await Widget.destroy({});

    // Return a success message as the API response
    res.ok({ message: "All widgets have been destroyed" });
  } catch (error) {
    // Handle any errors that occurred during the deletion process
    res.status(500).json({ error: "Failed to destroy widgets" });
  }
}

// Export the functions to be used by the routes
module.exports = {
  createWidget,
  destroyAllWidgets,
};
