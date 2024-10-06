export default function LoginPic() {
  return (
    <picture>
      <source
        media="(max-width: 980px)"
        srcSet="https://frontends.udemycdn.com/components/auth/mobile-illustration-x1.webp 1x, https://frontends.udemycdn.com/components/auth/mobile-illustration-x2.webp 2x"
      />
      <source
        media="(min-width: 980px)"
        srcSet="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp 1x, https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp 2x"
        src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp 2x"
      />
      <img
        alt=""
        src="https://frontends.udemycdn.com/components/auth/desktop-illustration-x1.webp"
        loading="lazy"
      />
    </picture>
  );
}
