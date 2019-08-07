import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  currentUser: service('current-user'),
  owner: alias('campaign.user'),
  ownerId: alias('owner.id'),
  currentUserId: alias('currentUser.user.id'),
  currentUserIsGm: computed('campaign', function() {
    return this.ownerId === this.currentUserId;
  })
});
