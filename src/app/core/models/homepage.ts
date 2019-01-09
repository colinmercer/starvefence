import { ContentItem, Fields} from 'kentico-cloud-delivery';
import { Content } from './content';

export class Homepage extends ContentItem {
  public title: Fields.TextField;
  public headerImage: Fields.AssetsField;
  public headerOverlayTop: Fields.TextField;
  public headerOverlayBottom: Fields.TextField;
  public headerButton: Fields.TextField;
  public introTitle: Fields.TextField;
  public introBody: Fields.TextField;
  
  public contents: Content[]

  constructor() {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'title') {
          return 'title'; // binds 'first_name' response from Kentico cloud to 'firstName' property of this class
        }
        if (fieldName === 'header_image') {
          return 'headerImage';
        }
        if (fieldName === 'header_overlay_top') {
          return 'headerOverlayTop';
        }
        if (fieldName === 'header_overlay_bottom') {
          return 'headerOverlayBottom';
        }
        if (fieldName === 'header_button') {
          return 'headerButton';
        }
        if (fieldName === 'intro_title') {
          return 'introTitle';
        }
        if (fieldName === 'intro_body') {
          return 'introBody';
        }
        if (fieldName === 'content') {
          return 'contents';
        }
      }
    });
  }
}