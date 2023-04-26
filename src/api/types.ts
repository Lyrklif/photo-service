interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: Array<any>;
  sponsorship: null;
  topic_submissions: any;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: null;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: null;
      paypal_email: null;
    };
  };
  exif: {
    make: null;
    model: null;
    name: null;
    exposure_time: null;
    aperture: null;
    focal_length: null;
    iso: null;
  };
  location: {
    name: null;
    city: null;
    country: null;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  views: number;
  downloads: number;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: null;
  bio: string;
  location: string | null;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  followed_by_user: boolean;
  downloads: number;
  uploads_remaining: number;
  instagram_username: string;
  email: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}

export type { IPhoto, IUser };
