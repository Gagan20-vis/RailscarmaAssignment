import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
  };
}

export interface CardFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_card_service_cards';
  info: {
    description: '';
    displayName: 'FeatureCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    productLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface LogoLinkLogo extends Struct.ComponentSchema {
  collectionName: 'components_logo_link_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    Logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    logotext: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UserTestimonialClient extends Struct.ComponentSchema {
  collectionName: 'components_user_testimonial_clients';
  info: {
    displayName: 'testimonialClient';
  };
  attributes: {
    Designation: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    ProfilePhoto: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.button': ButtonButton;
      'card.feature-card': CardFeatureCard;
      'link.link': LinkLink;
      'logo-link.logo': LogoLinkLogo;
      'services.services': ServicesServices;
      'user.testimonial-client': UserTestimonialClient;
    }
  }
}
