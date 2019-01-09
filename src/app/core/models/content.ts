import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class Content extends ContentItem {
  public title: Fields.TextField;
  public headerImage: Fields.AssetsField;
  public pageBody: Fields.TextField;
  public homepageSnippet: Fields.TextField;
  public homepageButton: Fields.TextField;

  constructor() {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'title') {
          return 'title'; // binds 'first_name' response from Kentico cloud to 'firstName' property of this class
        }
        if (fieldName === 'header_image') {
          return 'headerImage';
        }
        if (fieldName === 'page_body') {
          return 'pageBody';
        }
        if (fieldName === 'homepage_snippet') {
          return 'homepageSnippet';
        }
        if (fieldName === 'homepage_button') {
          return 'homepageButton';
        }
      }
    });
  }
}