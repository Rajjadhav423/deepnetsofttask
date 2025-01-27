const mongoose = require('mongoose');
const Menu = require('./menu'); // Change to require
const Item = require('./item'); // Change to require

const connectDB = async () => {
    try {
      await mongoose.connect(
        'mongodb+srv://rajeshjadhav1729:iPbgpHhVeRH3Nmsb@cluster0.uhqvp.mongodb.net/restaurantDB?retryWrites=true&w=majority'
      );
      console.log('MongoDB connected');
    } catch (err) {
      console.log('Error connecting to MongoDB:', err);
    }
  };
  
  connectDB();
  
const insertSampleData = async () => {
  try {
    // Step 1: Create sample menus
    const foodMenu = new Menu({
      name: 'Food',
      description: 'Delicious food options',
    });
    const drinksMenu = new Menu({
      name: 'Drinks',
      description: 'Refreshing drinks menu',
    });
    const brunchMenu = new Menu({
      name: 'Brunch',
      description: 'Relaxing brunch items',
    });

    await foodMenu.save();
    await drinksMenu.save();
    await brunchMenu.save();

    console.log('Menus created!');

    // Step 2: Create sample items and assign them to the corresponding menus
    const items = [
      {
        name: 'CINNAMON TOAST CRUNCH',
        description: 'Strawball peanut butter whisking vanilla extract, Amaretta, baking, egg white, cinnamon',
        price: '$16',
        menu: foodMenu._id, // Referencing foodMenu
      },
      {
        name: 'BAR 42 MARY',
        description: 'Tice, tomato juice, overcookwater, celery salt, black pepper, chisso, tulip, baked',
        price: '$14',
        menu: drinksMenu._id, // Referencing drinksMenu
      },
      {
        name: 'MOEI SYRITZ',
        description: 'Aperri, St Germain, balanced liquor fresh lime juice, mini Brut Most copper',
        price: '$20',
        menu: drinksMenu._id, // Referencing drinksMenu
      },
      {
        name: 'SPICY CHICKEN WINGS',
        description: 'Crispy chicken wings with a spicy sauce',
        price: '$12',
        menu: foodMenu._id, // Referencing foodMenu
      },
      {
        name: 'PULLED PORK SANDWICH',
        description: 'Tender pulled pork with BBQ sauce in a bun',
        price: '$18',
        menu: foodMenu._id, // Referencing foodMenu
      },
      {
        name: 'MARGARITA PIZZA',
        description: 'Classic pizza with mozzarella, tomato, and basil',
        price: '$16',
        menu: foodMenu._id, // Referencing foodMenu
      },
      {
        name: 'MOJITO',
        description: 'Refreshing cocktail with mint, lime, rum, and soda',
        price: '$10',
        menu: drinksMenu._id, // Referencing drinksMenu
      },
      {
        name: 'CAESAR SALAD',
        description: 'Crisp romaine lettuce with Caesar dressing and croutons',
        price: '$11',
        menu: brunchMenu._id, // Referencing brunchMenu
      },
      {
        name: 'AVOCADO TOAST',
        description: 'Whole grain toast topped with fresh avocado and seasonings',
        price: '$14',
        menu: brunchMenu._id, // Referencing brunchMenu
      },
      {
        name: 'FRENCH TOAST',
        description: 'Golden brown French toast with syrup and powdered sugar',
        price: '$15',
        menu: brunchMenu._id, // Referencing brunchMenu
      },
    ];

    // Step 3: Insert items into the database
    await Item.insertMany(items);

    console.log('Sample data inserted successfully!');
  } catch (err) {
    console.log('Error inserting sample data:', err);
  }
};

// Connect to the database and insert sample data
connectDB().then(() => insertSampleData());
