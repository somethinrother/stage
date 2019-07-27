import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

const PATH_NAMES = ['overview', 'chapters', 'locations', 'party', 'blue-booking', 'characters'];

export default Controller.extend({
  currentUser: service('current-user'),
  campaign: alias('model'),
  owner: alias('campaign.user'),
  locations: alias('campaign.locations'),
  ownerId: alias('owner.id'),
  currentUserId: alias('currentUser.user.id'),
  currentUserIsGm: computed('campaign', function() {
    return this.ownerId === this.currentUserId;
  }),
  links: computed(function() {
    return PATH_NAMES;
  })
});
