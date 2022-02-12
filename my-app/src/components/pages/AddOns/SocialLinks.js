import "../styles.css";
const SocialLink = () => {
  const socials = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/valerii-bihun-8b0450217/",
      icon: "fab fa-linkedin-in",
    },
    {
      id: 2,
      href: "https://github.com/Valllerian",
      icon: "fab fab fa-github",
    },
    {
      id: 3,
      href: "https://twitter.com/VallerianCRPT",
      icon: "fab fa-twitter",
    },
    {
      id: 4,
      href: "https://www.facebook.com/profile.php?id=100013709264704",
      icon: "fab fa-facebook-f",
    },
  ];
  return (
    <div>
      {socials.map((social) => (
        <a
          className="social-icon"
          href={social.href}
          target="_blank"
          key={social.id}
        >
          <i className={social.icon}></i>
        </a>
      ))}
      ;
    </div>
  );
};

export default SocialLink;
