import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-#c9c484ff-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            About
          </Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
      title={<span className="text-#004d66-600">Align - Create - Innovate</span>}
      description="Understanding your purpose to build your ideas"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
        <Button xl>Got a Request?</Button>
        </Link>
      }
      />
    </Section>
  </Background>
);

export { Hero };
