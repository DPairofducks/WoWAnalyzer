import React from 'react';

import ITEMS from 'common/ITEMS';
import Combatants from 'Parser/Core/Modules/Combatants';

import Analyzer from 'Parser/Core/Analyzer';
import Wrapper from 'common/Wrapper';

class MantleOfTheMasterAssassin extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

	on_initialized(){
		this.active = this.combatants.selected.hasShoulder(ITEMS.MANTLE_OF_THE_MASTER_ASSASSIN.id);
  }
  
	item() {
		return {
			item: ITEMS.MANTLE_OF_THE_MASTER_ASSASSIN,
			result: <Wrapper>Equipped.</Wrapper>,
		};
	}

}

export default MantleOfTheMasterAssassin;