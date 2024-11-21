## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

    SELECT title, release_year
    FROM film;


2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.

    select first_name, last_name
    from customer
    where last_name
    like 'S%';


3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

    select title, rental_duration
    from film
    order by rental_duration DESC, title ASC;    


4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

    select film.title, category.name
    from film
    inner join film_category
    on film.film_id = film_category.film_id
    inner join category
    on film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.

    select category.name AS category_name, AVG(film.rental_duration) AS average_rental_duration
    from film
    join film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    group by category.name;



6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

    select COUNT(*) AS action_films_amount
    from film
    join film_category on film.film_id = film_category.film_id
    join category on film_category.category_id = category.category_id
    where category.name = 'Action';


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.

    insert into customer(customer_id,store_id,first_name, last_name, email, address_id, activebool,create_date)
    values (1001, 1, 'Anthony', 'Blazer', 'guessWhat@gmail.com', 44, true, NOW());


8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

    UPDATE film
    set rental_rate = rental_rate * 1.10
    where film_id IN (
        select film.film_id
        from film
        join film_category ON film.film_id = film_category.film_id
        join category ON film_category.category_id = category.category_id
        where category.name = 'Comedy'
    );  


9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

    DELETE FROM film
    where film_id not in (
        select distinct inventory.film_id
        from rental
        join inventory on rental.inventory_id = inventory.inventory_id
    );


10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

    create table movie_reviews (
        review_id SERIAL PRIMARY KEY,
        film_id INTEGER NOT NULL,
        reviewer_name VARCHAR(255) NOT NULL,
        rating INTEGER,
        comments TEXT
    );

    alter table movie_reviews
    add constraint movie_reviews_film_id_fkey
    foreign key (film_id)
    references film(film_id);


## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

    The AutoModels class leverages SQLAlchemy's automap feature to automatically create ORM models based on the database schema. Rather than manually
    defining classes for every table, it reflects the database's structure and dynamically generates models that align with the tables and their 
    relationships.


2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

    To enhance efficiency. By utilizing async functions and the asyncio event loop, it can execute multiple database queries at the same time without hindering the execution of other tasks. 
    This is beneficial since it enables the program to stay responsive while carrying out lengthy operations.


3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax.

    To select customers whose first name ends with "n" or "a", you can create a SQLAlchemy query that uses the like() function with wildcards to combine both conditions. This approach enables the query to identify customers with names that end in either letter, providing a 
    straightforward and efficient method for filtering data. It also makes the query easy to read and adjust as necessary.

    async with AsyncSession(engine) as session:
    customers = await session.execute(
        select(Customer).where(
            Customer.first_name.like('%n') | Customer.first_name.like('%a')
        )
    )
    for customer in customers.scalars().all():
        print(customer.first_name)

4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.

    Using raw SQL with conn.execute() offers greater control and can be more efficient at times, but Raw SQL is more prone to SQL injection vulnerabilities if the queries are constructed with unsanitized input. While text() can help mitigate this risk, it's still 
    a manual process to ensure all input is sanitized. On the other hand, SQLAlchemy’s ORM with session.execute() enhances the safety, clarity, and maintainability of your code by abstracting the raw SQL. Although ORM methods might introduce some overall control 
    decrease when querying, they generally provide a more flexible and secure approach to database interaction.

