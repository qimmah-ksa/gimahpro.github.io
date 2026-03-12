<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RNF0DYEEFT');
</script>
    
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "قمة التميز للاستشارات المالية والإدارية",
  "url": "https://www.gimahpro.com/",
  "logo": "https://www.gimahpro.com/assets/images/gimahpro-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966533221169",
    "contactType": "customer service",
    "areaServed": "SA",
    "availableLanguage": "Arabic"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "حي الياسمين",
    "addressLocality": "الرياض",
    "postalCode": "13325",
    "addressCountry": "SA"
  },
  "sameAs": [
    "https://www.linkedin.com/company/gimahpro",
    "https://twitter.com/gimahpro",
    "https://www.instagram.com/gimahpro"
  ]
}
</script>
<script>
document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData
    });

    if (response.ok) {
        document.getElementById("form-success").style.display = "block";
        document.getElementById("form-error").style.display = "none";
        form.reset();
    } else {
        document.getElementById("form-success").style.display = "none";
        document.getElementById("form-error").style.display = "block";
    }
});
</script>
