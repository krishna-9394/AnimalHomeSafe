create database GentleGuardians;
use GentleGuardians;


-- creating basic tables
CREATE TABLE ADDRESS (
  address_id INTEGER NOT NULL PRIMARY KEY, 
  street_name VARCHAR(255),
  city VARCHAR(25), 
  state VARCHAR(25), 
  pincode INTEGER
);

CREATE TABLE PRODUCT (
  product_id INTEGER NOT NULL PRIMARY KEY, 
  product_name VARCHAR(100),
  product_description VARCHAR(250),
  cost INTEGER
);

CREATE TABLE RETAIL_STORE (
  shop_id INTEGER PRIMARY KEY,
  shop_name VARCHAR(25),
  owner_name VARCHAR(25),
  contact_number INTEGER,
  address_id INTEGER,
  FOREIGN KEY (address_id) REFERENCES ADDRESS(address_id)
);

CREATE TABLE PET_CLINIC (
  clinic_id INTEGER PRIMARY KEY,
  clinic_name VARCHAR(50),
  doctor_name VARCHAR(50),
  contact_number INTEGER,
  address_id INTEGER,
  FOREIGN KEY (address_id) REFERENCES ADDRESS(address_id)
);

CREATE TABLE PET (
  pet_id INTEGER PRIMARY KEY,
  description_info VARCHAR(450),
  animal_name VARCHAR(50),
  breed VARCHAR(50),
  allergens VARCHAR(100),
  size VARCHAR(25),
  diet_plan VARCHAR(500),
  gender VARCHAR(25),
  max_temp_of_survival INTEGER,
  min_temp_of_survival INTEGER
);

CREATE TABLE CUSTOMER (
  customer_id INTEGER PRIMARY KEY,
  name VARCHAR(25),
  email VARCHAR(25),
  address_id INTEGER,
  contact_number VARCHAR(15),
  sponsor BOOLEAN,
  sponsor_amount INTEGER,
  FOREIGN KEY (address_id) REFERENCES ADDRESS(address_id)
);

CREATE TABLE ANIMAL_PLACE (
  place_id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  address_id INTEGER,
  type_of_place VARCHAR(50),
  FOREIGN KEY (address_id) REFERENCES ADDRESS(address_id)
);

CREATE TABLE PRODUCTS_LIST_OF_ALL_SHOPS (
  product_id INTEGER,
  shop_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES PRODUCT(product_id),
  FOREIGN KEY (shop_id) REFERENCES RETAIL_STORE(shop_id),
  PRIMARY KEY (shop_id, product_id)
);

CREATE TABLE ANIMALS_LIST_IN_ALL_PLACES (
  pet_id INTEGER,
  place_id INTEGER,
  animal_count INTEGER,
  FOREIGN KEY (pet_id) REFERENCES PET(pet_id),
  FOREIGN KEY (place_id) REFERENCES ANIMAL_PLACE(place_id),
  PRIMARY KEY (pet_id, place_id)
);

CREATE TABLE PETS_LIST_OF_ALL_CUSTOMERS(
  pet_id INTEGER,
  customer_id INTEGER,
  FOREIGN KEY (pet_id) REFERENCES PET(pet_id),
  FOREIGN KEY (customer_id) REFERENCES CUSTOMER(customer_id),
  PRIMARY KEY (pet_id, customer_id)
);

-- Product Data
INSERT INTO ADDRESS (address_id, street_name, city, state, pincode) VALUES
(1, 'MG Road', 'Bangalore', 'Karnataka', 560001),
(2, 'Anna Salai', 'Chennai', 'Tamil Nadu', 600002),
(3, 'Park Street', 'Kolkata', 'West Bengal', 700016),
(4, 'Connaught Place', 'New Delhi', 'Delhi', 110001),
(5, 'FC Road', 'Pune', 'Maharashtra', 411004),
(6, 'Hill Road', 'Mumbai', 'Maharashtra', 400050),
(7, 'Lal Darwaza', 'Ahmedabad', 'Gujarat', 380001),
(8, 'Ashok Marg', 'Lucknow', 'Uttar Pradesh', 226001),
(9, 'Jubilee Hills', 'Hyderabad', 'Telangana', 500033),
(10, 'Pantheon Road', 'Chennai', 'Tamil Nadu', 600008);

-- Inserting Sample Data for National Parks
INSERT INTO ADDRESS (address_id, street_name, city, state, pincode) VALUES
(11, 'Forest Lane', 'Sawai Madhopur', 'Rajasthan', 322001),   -- Ranthambore National Park
(12, 'Jungle Road', 'Chhindwara', 'Madhya Pradesh', 480001),  -- Pench National Park
(13, 'Safari Avenue', 'Umaria', 'Madhya Pradesh', 484661),   -- Bandhavgarh National Park
(14, 'Wild Trail', 'Kullu', 'Himachal Pradesh', 175131),     -- Great Himalayan National Park
(15, 'Tiger Path', 'Kozhikode', 'Kerala', 673596);           -- Silent Valley National Park

-- Inserting Sample Data for Zoos
INSERT INTO ADDRESS (address_id, street_name, city, state, pincode) VALUES
(16, 'Zoo Road', 'Hyderabad', 'Telangana', 500064),          -- Nehru Zoological Park
(17, 'Animal Street', 'Kolkata', 'West Bengal', 700053),     -- Alipore Zoological Gardens
(18, 'Safari Lane', 'Delhi', 'Delhi', 110003),               -- National Zoological Park
(19, 'Wildlife Way', 'Lucknow', 'Uttar Pradesh', 226007),    -- Lucknow Zoo
(20, 'Birds Boulevard', 'Mysuru', 'Karnataka', 570011);      -- Mysuru Zoo

-- Inserting Sample Data for Customer Addresses
INSERT INTO ADDRESS (address_id, street_name, city, state, pincode) VALUES
(71, 'Brigade Road', 'Bangalore', 'Karnataka', 560025),
(72, 'Greams Road', 'Chennai', 'Tamil Nadu', 600006),
(73, 'Elgin Road', 'Kolkata', 'West Bengal', 700020),
(74, 'Karol Bagh', 'New Delhi', 'Delhi', 110005),
(75, 'JM Road', 'Pune', 'Maharashtra', 411004),
(76, 'Veera Desai Road', 'Mumbai', 'Maharashtra', 400053),
(77, 'C.G. Road', 'Ahmedabad', 'Gujarat', 380006),
(78, 'Gomti Nagar', 'Lucknow', 'Uttar Pradesh', 226010),
(79, 'Madhapur', 'Hyderabad', 'Telangana', 500081),
(80, 'Besant Nagar', 'Chennai', 'Tamil Nadu', 600090),
(81, 'Vittal Mallya Road', 'Bangalore', 'Karnataka', 560001),
(82, 'T. Nagar', 'Chennai', 'Tamil Nadu', 600017),
(83, 'Ballygunge', 'Kolkata', 'West Bengal', 700019),
(84, 'Rajouri Garden', 'New Delhi', 'Delhi', 110027),
(85, 'Aundh', 'Pune', 'Maharashtra', 411007),
(86, 'Juhu Tara Road', 'Mumbai', 'Maharashtra', 400049),
(87, 'Maninagar', 'Ahmedabad', 'Gujarat', 380008),
(88, 'Hazratganj', 'Lucknow', 'Uttar Pradesh', 226001),
(89, 'Banjara Hills', 'Hyderabad', 'Telangana', 500034),
(90, 'Adyar', 'Chennai', 'Tamil Nadu', 600020),
(91, 'Koramangala', 'Bangalore', 'Karnataka', 560034),
(92, 'Borivali West', 'Mumbai', 'Maharashtra', 400092),
(93, 'Chandni Chowk', 'New Delhi', 'Delhi', 110006),
(94, 'Salt Lake', 'Kolkata', 'West Bengal', 700091),
(95, 'Kothrud', 'Pune', 'Maharashtra', 411038),
(96, 'Vastrapur', 'Ahmedabad', 'Gujarat', 380054),
(97, 'Vikaspuri', 'New Delhi', 'Delhi', 110018),
(98, 'Malleswaram', 'Bangalore', 'Karnataka', 560003),
(99, 'Begumpet', 'Hyderabad', 'Telangana', 500016),
(100, 'Alambagh', 'Lucknow', 'Uttar Pradesh', 226005);


-- --------------
-- Product Data
INSERT INTO PRODUCT (product_id, product_name, product_description, cost) VALUES
(1, 'Dog Collar', 'Adjustable collar for medium-sized dogs', 300),
(2, 'Catnip Toy', 'Interactive toy filled with catnip', 150),
(3, 'Bird Seed Mix', 'Nutritious mix of seeds for pet birds', 200),
(4, 'Aquarium Filter', 'Filter for freshwater aquariums up to 50L', 900),
(5, 'Hamster Wheel', 'Exercise wheel for hamsters and gerbils', 450),
(6, 'Horse Saddle', 'Leather saddle for riding horses', 7500),
(7, 'Reptile Heat Lamp', 'Infrared heat lamp for reptile terrariums', 1100),
(8, 'Rabbit Hutch', 'Outdoor wooden hutch for rabbits', 3200),
(9, 'Flea and Tick Shampoo', 'Shampoo for dogs to remove fleas and ticks', 500),
(10, 'Turtle Food Pellets', 'Nutritious pellets for pet turtles', 280),
(11, 'Parrot Perch', 'Natural wood perch for large parrots', 650),
(12, 'Kitten Litter', 'Clumping cat litter for kittens', 300),
(13, 'Dog Bone Chew', 'Natural bone chew for dogs', 230),
(14, 'Fish Tank Decor', 'Artificial coral decoration for fish tanks', 750),
(15, 'Puppy Training Pads', 'Absorbent pads for puppy potty training', 400),
(16, 'Guinea Pig Cage', 'Spacious cage with play area for guinea pigs', 2800),
(17, 'Dog Leash', 'Durable leash for walking dogs', 350),
(18, 'Cat Scratching Post', 'Post with sisal rope for cat scratching', 800),
(19, 'Bird Bath', 'Hanging bath for garden birds', 650),
(20, 'Dog Dental Treats', 'Treats to help reduce plaque in dogs', 500);

-- Inserting Additional Sample Data
INSERT INTO PRODUCT (product_id, product_name, product_description, cost) VALUES
(21, 'Squeaky Dog Toy', 'Rubber toy that squeaks when bitten', 280),
(22, 'Cat Feather Wand', 'Interactive toy with feathers for cats', 220),
(23, 'Dog Plush Teddy', 'Soft plush teddy bear for dogs', 400),
(24, 'Rope Tug Toy', 'Durable rope for tug-of-war games with dogs', 320),
(25, 'Cat Laser Pointer', 'Laser toy for cats to chase', 180),
(26, 'Bird Swing', 'Wooden swing for pet birds like parrots and finches', 250),
(27, 'Hamster Ball', 'Transparent ball for hamster exploration', 290),
(28, 'Pet Teepee', 'Cozy teepee-style resting place for cats or small dogs', 1400),
(29, 'Dog Memory Foam Bed', 'Memory foam bed for elderly or arthritic dogs', 2500),
(30, 'Cat Window Perch', 'Secure perch for cats to observe from windows', 1100),
(31, 'Rabbit Play Tunnel', 'Flexible tunnel for rabbits to play and hide', 650),
(32, 'Aquarium Cave', 'Decorative cave for fish to hide', 600),
(33, 'Reptile Hideout', 'Shaded area for reptiles to rest and hide', 500),
(34, 'Bird Ladder', 'Wooden ladder for birds to climb and perch', 350),
(35, 'Dog Puzzle Toy', 'Toy that dispenses treats as the dog solves the puzzle', 700),
(36, 'Interactive Cat Ball', 'Ball that moves and lights up, interactive for cats', 380),
(37, 'Wooden Pet House', 'Outdoor wooden shelter for cats or small dogs', 5000),
(38, 'Self-Heating Pet Mat', 'Mat that reflects pet\'s heat, keeping them warm', 900),
(39, 'Dog Agility Kit', 'Set of hurdles and tunnels for dog agility training', 4500),
(40, 'Catnip Spray', 'Spray to entice cats towards toys or scratch posts' , 250);


-- Inserting Retail Store Data
INSERT INTO RETAIL_STORE (shop_id, shop_name, owner_name, contact_number, address_id) VALUES
(1, 'PetMart', 'Rajesh Kumar', 98450, 3),
(2, 'Animal House', 'Sunita Patel', 98350, 75),
(3, 'Paws & Tails', 'Amit Roy', 983601, 15),
(4, 'Fluffy World', 'Anil Sharma', 98100, 91),
(5, 'Birds Paradise', 'Sheetal Desai', 98230, 8),
(6, 'Urban Paws', 'Vijay Mehta', 98240, 84),
(7, 'Pet Stop', 'Girish Jain', 98480, 12),
(8, 'Creature Comforts', 'Farida Khan', 98380, 19),
(9, 'Pet Essentials', 'Krishna Reddy', 98493, 73),
(10, 'Aquatic Wonders', 'Latha Nair', 984601, 2),
(11, 'Pet Plaza', 'Manoj Pillai', 98450, 79),
(12, 'Furry Friends', 'Harpreet Singh', 98350, 17),
(13, 'Pet Kingdom', 'Reena Bose', 98360, 90),
(14, 'Happy Tails', 'Rakesh Yadav', 98100, 14),
(15, 'Feathered Nest', 'Nandini Rao', 98230, 95),
(16, 'Puppy Palace', 'Sudhir Deshmukh', 98240, 6),
(17, 'Wild Whiskers', 'Lalita Kumari', 98480, 11),
(18, 'Fishy Affairs', 'Mohammad Iqbal', 98380, 96),
(19, 'Pet Oasis', 'Jyoti Agarwal', 98490, 20),
(20, 'Bunny Burrow', 'Karan Kapoor', 98460, 77),
(21, 'Critter Cottage', 'Vishal Goyal', 98450, 18),
(22, 'Reptile Realm', 'Ashima Sinha', 98350, 98),
(23, 'Purr-fect Pets', 'Dhananjay Chatterjee', 98360, 7),
(24, 'Canine Corner', 'Chandni Sahni', 98100, 99),
(25, 'Birdie Boutique', 'Tara Joshi', 98230, 5),
(26, 'Aquarium Arcade', 'Devendra Bhatt', 98240, 16),
(27, 'Whiskers & Wag', 'Nikhil Menon', 98480, 93),
(28, 'Pet Pantry', 'Shubhangi Kulkarni', 98380, 10),
(29, 'Wild Woofs', 'Irfan Qureshi', 98490, 71),
(30, 'Feather & Fur', 'Simran Malhotra', 98460, 9),
(31, 'Buddy Bazaar', 'Parveen Malik', 98450, 86),
(32, 'Critter Castle', 'Jasmeet Dhillon', 98350, 92),
(33, 'Pawfect Store', 'Varun Trivedi', 98360, 4),
(34, 'Moggy Market', 'Preeti Dubey', 98100, 13),
(35, 'Beastly Bazaar', 'Kishore Nanavati', 98230, 74),
(36, 'Birdsong Boutique', 'Meena Swaminathan', 982401, 83),
(37, 'Fauna Fair', 'Zaheer Sheikh', 98480, 97),
(38, 'Reptile Ritz', 'Lavanya Raghav', 98380, 89);

-- Inserting Sample Data for retail stores
-- Table creation (for reference)
CREATE TABLE PET_CLINIC (
  clinic_id INTEGER PRIMARY KEY,
  clinic_name VARCHAR(50),
  doctor_name VARCHAR(50),
  contact_number INTEGER,
  address_id INTEGER,
  FOREIGN KEY (address_id) REFERENCES ADDRESS(address_id)
);

-- Inserting Sample Data fir pet_clinics
INSERT INTO PET_CLINIC (clinic_id, clinic_name, doctor_name, contact_number, address_id) VALUES
(1, 'PetWell Clinic', 'Dr. Rahul Sharma', 12345, 1),
(2, 'Healthy Paws Veterinary', 'Dr. Priya Desai', 54321, 2),
(3, 'VetCare Center', 'Dr. Arvind Patel', 23456, 3),
(4, 'Companion Care', 'Dr. Sunita Ray', 65432, 4),
(5, 'Animal Heal Hospital', 'Dr. Rakesh Mehta', 34567, 5),
(6, 'Urban Vet Clinic', 'Dr. Reena Pillai', 76543, 6),
(7, 'Paws & Whiskers Veterinary', 'Dr. Rajan Kapoor', 45678, 7),
(8, 'Nature Vet Clinic', 'Dr. Nalini Joshi', 87654, 8),
(9, 'Four-legged Friends Clinic', 'Dr. Omkar Bhatt', 56789, 9),
(10, 'Animal Kingdom Vet', 'Dr. Latha Krishnan', 98765, 10),
(11, 'Happy Tails Veterinary', 'Dr. Manish Yadav', 67890, 71),
(12, 'FaunaCare Center', 'Dr. Preeti Ghosh', 98760, 72),
(13, 'Animal Wellness Hospital', 'Dr. Tapan Sen', 67895, 73),
(14, 'LifeCare Vet Clinic', 'Dr. Vikas Nair', 12340, 74),
(15, 'Heart & Paw Veterinary', 'Dr. Sheetal Rane', 54310, 75),
(16, 'Animal Life Clinic', 'Dr. Suresh Agarwal', 23450, 76),
(17, 'GreenPaws Vet Care', 'Dr. Karuna Chatterjee', 65410, 77),
(18, 'Feather & Fur Veterinary', 'Dr. Irfan Qureshi', 34560, 78),
(19, 'Family Pet Clinic', 'Dr. Varsha Khanna', 76510, 79),
(20, 'City Pet Hospital', 'Dr. Bhavna Mistry', 45670, 80),
(21, 'Care & Cure Veterinary', 'Dr. Anirban Bose', 87650, 81),
(22, 'Trusty Tails Clinic', 'Dr. Chandrika Deshmukh', 56780, 82),
(23, 'Pawsitive Vet Care', 'Dr. Dipak Raut', 98750, 83),
(24, 'VetFriend Clinic', 'Dr. Mohini Patil', 67850, 84),
(25, 'Four Paws Vet Hospital', 'Dr. Prakash Verma', 12330, 85),
(26, 'AnimalGuard Clinic', 'Dr. Ranjana Sinha', 54320, 86),
(27, 'Pawfect Health Veterinary', 'Dr. Govind Rajan', 23440, 87),
(28, 'Feathered Friend Vet', 'Dr. Simran Kaur', 65420, 88),
(29, 'Healthy Tails Clinic', 'Dr. Dhruv Sharma', 34550, 89),
(30, 'SafePaws Veterinary', 'Dr. Ritu Agrawal', 76520, 90);


-- Inserting Additional Sample Data
INSERT INTO PET (pet_id, description_info, animal_name, breed, allergens, size, diet_plan, gender, max_temp_of_survival, min_temp_of_survival) VALUES
(16, 'Docile and easy-going.', 'Goat', 'Nubian', 'Dander', 'Medium', 'Hay, grains, greens.', 'Female', 38, -10),
(17, 'Gentle and calm.', 'Cow', 'Jersey', 'Dander', 'Large', 'Grass, hay, silage.', 'Female', 35, -15),
(18, 'Majestic and vibrant.', 'Peacock', 'Indian Blue', 'Feather dust', 'Large', 'Seeds, insects, small mammals.', 'Male', 40, 5),
(19, 'Playful and inquisitive.', 'Cub', 'Lion Cub', 'Dander', 'Medium', 'Meat, poultry.', 'Male', 38, -5),
(20, 'Hardy and friendly.', 'Goat', 'Boer', 'Dander', 'Medium', 'Grains, hay.', 'Male', 38, -10),
(21, 'Energetic and robust.', 'Cow', 'Holstein', 'Dander', 'Large', 'Grass, grains.', 'Female', 33, -15),
(22, 'Curious and playful.', 'Rabbit', 'Holland Lop', 'Dander', 'Small', 'Hay, pellets, vegetables.', 'Female', 30, -5),
(23, 'Sleek and agile.', 'Ferret', 'Standard', 'Dander', 'Small', 'Meat, commercial ferret food.', 'Male', 30, -2),
(24, 'Cheerful and energetic.', 'Cub', 'Tiger Cub', 'Dander', 'Medium', 'Meat, poultry.', 'Female', 40, -5),
(25, 'Gentle and affectionate.', 'Llama', 'Cria', 'Dander', 'Large', 'Hay, grains, grass.', 'Male', 32, -20),
(26, 'Graceful and gentle.', 'Deer', 'White-Tailed', 'None', 'Medium', 'Grass, fruits, nuts.', 'Female', 34, -12),
(27, 'Tiny and chirpy.', 'Guinea Pig', 'American', 'Dander', 'Small', 'Guinea pig pellets, hay, veggies.', 'Male', 26, 5),
(28, 'Bright and colorful.', 'Iguana', 'Green', 'None', 'Medium', 'Leafy greens, fruits.', 'Female', 40, 18),
(29, 'Small and active.', 'Turtle', 'Red-eared Slider', 'None', 'Small', 'Aquatic plants, insects, fish.', 'Male', 35, 10),
(30, 'Lively and noisy.', 'Duck', 'Mallard', 'Feather dust', 'Medium', 'Grains, insects, small fish.', 'Female', 33, -5);

-- customer details : 
INSERT INTO CUSTOMER (customer_id, name, email, address_id, contact_number, sponsor, sponsor_amount) VALUES
(1, 'Rajesh Kumar', 'rajesh@email.com', 5, '9845012345', TRUE, 500),
(2, 'Sunita Patel', 'sunita@email.com', 73, '9835012346', FALSE, NULL),
(3, 'Amit Roy', 'amit@email.com', 13, '9836012347', TRUE, 300),
(4, 'Anil Sharma', 'anil@email.com', 80, '9810012348', FALSE, NULL),
(5, 'Sheetal Desai', 'sheetal@email.com', 17, '9823012349', TRUE, 250),
(6, 'Vijay Mehta', 'vijay@email.com', 4, '9824012350', TRUE, 1000),
(7, 'Girish Jain', 'girish@email.com', 86, '9848012351', FALSE, NULL),
(8, 'Farida Khan', 'farida@email.com', 2, '9838012352', TRUE, 450),
(9, 'Krishna Reddy', 'krishna@email.com', 71, '9849012353', FALSE, NULL),
(10, 'Latha Nair', 'latha@email.com', 9, '9846012354', TRUE, 750),
(11, 'Manoj Pillai', 'manoj@email.com', 15, '9845012355', TRUE, 350),
(12, 'Harpreet Singh', 'harpreet@email.com', 88, '9835012356', FALSE, NULL),
(13, 'Reena Bose', 'reena@email.com', 7, '9836012357', TRUE, 600),
(14, 'Rakesh Yadav', 'rakesh@email.com', 78, '9810012358', FALSE, NULL),
(15, 'Nandini Rao', 'nandini@email.com', 14, '9823012359', TRUE, 200),
(16, 'Sudhir Deshmukh', 'sudhir@email.com', 89, '9824012360', TRUE, 100),
(17, 'Lalita Kumari', 'lalita@email.com', 19, '9848012361', TRUE, 550),
(18, 'Mohammad Iqbal', 'mohammad@email.com', 11, '9838012362', FALSE, NULL),
(19, 'Jyoti Agarwal', 'jyoti@email.com', 3, '9849012363', TRUE, 650),
(20, 'Karan Kapoor', 'karan@email.com', 90, '9846012364', TRUE, 750);


-- Inserting Sample Data for National Parks
INSERT INTO ANIMAL_PLACE (place_id, name, address_id, type_of_place) VALUES
(1, 'Ranthambore National Park', 11, 'national park'),
(2, 'Pench National Park', 12, 'national park'),
(3, 'Bandhavgarh National Park', 13, 'national park'),
(4, 'Great Himalayan National Park', 14, 'national park'),
(5, 'Silent Valley National Park', 15, 'national park');

-- Inserting Sample Data for Zoos
INSERT INTO ANIMAL_PLACE (place_id, name, address_id, type_of_place) VALUES
(6, 'Nehru Zoological Park', 16, 'zoo'),
(7, 'Alipore Zoological Gardens', 17, 'zoo'),
(8, 'National Zoological Park', 18, 'zoo'),
(9, 'Lucknow Zoo', 19, 'zoo'),
(10, 'Mysuru Zoo', 20, 'zoo');

