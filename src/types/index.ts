export type IbadanLocation = 'Bodija' | 'Akala Express' | 'Jericho' | 'Oluyole' | 'Iyaganku' | 'Samonda' | 'Challenge';

export interface VibeData {
  step: number;
  budget: string;
  location: IbadanLocation | '';
  name: string;
  whatsapp: string;
}

export interface WaitlistEntry {
  contact_info: string;
  source: 'app_download' | 'footer';
}

export interface NavLink {
  label: string;
  href: string;
}