<template>
  <div class="contact-page">
    <h1>Kontakt</h1>
    <p>Masz pytania lub potrzebujesz naszych usług? Skontaktuj się z nami!</p>

    <div class="contact-details">
      <div class="contact-info">
        <h2>Dane Kontaktowe</h2>
        <p><strong>Adres:</strong> ul. Warsztatowa 123, 00-000 Miastowo</p>
        <p><strong>Telefon:</strong> +48 123 456 789</p>
        <p><strong>Email:</strong> kontakt@warsztat-samochodowy.pl</p>
      </div>

      <div class="contact-form">
        <h2>Formularz Kontaktowy</h2>
        <form>
          <label for="name">Imię i Nazwisko</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Wiadomość</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-page {
  padding: 2rem;
}

.contact-details {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.contact-info,
.contact-form {
  flex: 1;
  margin: 0 1rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-top: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.5rem;
  margin-top: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
