import React, { Component } from 'react';
import { observer } from 'mobx-react';

import HabitDateItem from './HabitDateItem';
import HabitDateChevron from './HabitDateChevron';
import RootStore from '../../store/RootStore';
import { getDates, getDayName } from '../../TextUtils';

class HabitDate extends Component {
  render() {
  	const {style} = this.props;
  	const rows = getDates(RootStore.store.ui.habitDate).map((date, i) => {
  		return <HabitDateItem key={i} dayName={getDayName(date.getDay())} dayNumber={date.getDate()}/>
  	});

    return (
      <div style={style}>
      	{rows}
        <div style={{display: 'inline-block'}}>
          <HabitDateChevron imgName="chevron-right" left={false}/>
          <HabitDateChevron imgName="chevron-left" left={true}/>
        </div>
      </div>
    );
  }
}

export default observer(HabitDate);
