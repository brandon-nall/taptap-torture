import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
const leaderboardView = ({
  highScores,
  leaderboardViewStyles,
  openMainMenu,
  globalStyles,
}) => {
  const highScoresList = highScores.map((score, i) => {
    return (
      <View key={i} style={leaderboardViewStyles.highScoresListItem}>
        <Text style={[globalStyles.copyText, { flex: 2, textAlign: 'center' }]}>
          {i + 1}
        </Text>
        <Text style={[globalStyles.copyText, { flex: 4, textAlign: 'left' }]}>
          {score.nickname}
        </Text>
        <Text style={[globalStyles.copyText, { flex: 4 }]}>{score.score}</Text>
        <Text style={[globalStyles.copyText, { flex: 2 }]}>{score.level}</Text>
      </View>
    );
  });

  return (
    <View style={globalStyles.viewWindow}>
      <Text style={globalStyles.menuHeaderText}>Top Scores</Text>
      <View style={leaderboardViewStyles.highScoresListItem}>
        <Text style={[globalStyles.copyText, { flex: 2 }]}>#</Text>
        <Text style={[globalStyles.copyText, { flex: 4 }]}>CODENAME</Text>
        <Text style={[globalStyles.copyText, { flex: 4 }]}>SCORE</Text>
        <Text style={[globalStyles.copyText, { flex: 2 }]}>LEVEL</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'rgb(125,0,0)',
          borderBottomWidth: 1,
        }}
      />
      {highScoresList}
      <TouchableHighlight
        onPress={openMainMenu}
        style={globalStyles.menuButtonLong}
      >
        <Text style={globalStyles.menuButtonLongText}>BACK</Text>
      </TouchableHighlight>
    </View>
  );
};
export default leaderboardView;
