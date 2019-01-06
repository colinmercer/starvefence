import { ContentItem, Fields} from 'kentico-cloud-delivery';

export class Homepage extends ContentItem {
  public title: Fields.TextField;

  constructor() {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'title') {
          return 'title'; // binds 'first_name' response from Kentico cloud to 'firstName' property of this class
        }
      }
    });
  }
}