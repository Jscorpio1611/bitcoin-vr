import React from 'react';
import {
  Box,
  Animated,
  Text,
  View,
  StyleSheet,
  VrButton
} from 'react-vr';

import { connect } from 'react-redux';

import BlockchainInfo from './BlockchainInfo.js'

// Layout props
const _panelHeight = 30
const _panelWidth = 60;

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);


  }

  selectCurrency() {
    // select which currency you'd like to render
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container_header}>

          <View style={styles.container_title}>
            <Text style={styles.text_title}>
              Blockchain-VR
            </Text>
          </View>

          <View style={styles.container_key}>
            <View style={styles.container_keyItem}>
              <Text style={styles.text_smallRightAlign}>
                {`Balloon < 1 BTC`}
              </Text>
            </View>
            <View style={styles.container_keyItemBottom}>
              <Text style={styles.text_smallRightAlign}>
                {`Zeppelin >= 1 BTC`}
              </Text>
            </View>
          </View>

        </View>

        <View style={{ alignItems: 'center' }}>
          <BlockchainInfo />
        </View>

        <View style={styles.container_footer}>
          <View style={styles.container_keyItem}>
            <Text style={styles.text_smallRightAlign}>
              {`Created by Daniel Ong, Robin Wilson, Jing Jia`}
            </Text>
          </View>
          <View style={styles.container_keyItemBottom}>
            <Text style={styles.text_smallRightAlign}>
              {`github.com/data-VR/blockchain-vr`}
            </Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  currencyButton: {
    margin: 0.02,
    padding: 0.02,
    backgroundColor: 'green',
  },
  container: {
    position: 'absolute',
    transform: [
      { translate: [-1.25, -0.5, -2] },
      { rotateX: -25 }
    ],
    borderWidth: 0.01,
    borderColor: '#858585',
    backgroundColor: '#000000CC',
  },
  container_header: {
    width: 2.5,
    flexDirection: 'row',
  },
  container_title: {
    width: 1,
    paddingLeft: 0.1,
    marginBottom: -0.05
  },
  text_title: {
    textAlign: 'left',
    fontSize: .15,
  },
  container_key: {
    width: 1.4,
    marginBottom: -0.05
  },
  container_keyItem: {
    marginTop: 0.01,
    marginBottom: -0.03
  },
  container_keyItemBottom: {
    marginBottom: 0.05
  },
  text_smallRightAlign: {
    textAlign: 'right',
    fontSize: 0.08,
  },
  container_footer: {
    marginRight: 0.05,
  }
})

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
