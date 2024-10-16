# MaleFashion Django Project

This is a Django project for a male fashion website. Follow the steps below to run it locally.

## Prerequisites

- Python 3.x
- Django
- Virtualenv

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/riaan-attar/ECOM
    cd malefashion
    ```

2. **Create a virtual environment:**
    ```sh
    python -m venv venv
    ```

3. **Activate the virtual environment:**
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```

4. **Install the dependencies:**
    ```sh
    pip install -r requirements.txt
    ```

5. **Apply the migrations:**
    ```sh
    python manage.py migrate
    ```

6. **Create a superuser:**
    ```sh
    python manage.py createsuperuser
    ```

7. **Run the development server:**
    ```sh
    python manage.py runserver
    ```

8. **Access the website:**
    Open your web browser and go to `http://127.0.0.1:8000`

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is a private project and no liscence exist .
