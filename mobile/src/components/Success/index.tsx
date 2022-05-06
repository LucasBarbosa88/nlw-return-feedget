import React from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

interface Props {
    onSendANotherFeedback: () => void;
}

export function Success({ onSendANotherFeedback }: Props) {
  return (
    <View style={styles.container}>
        <Image
            source={successImg}
            style={styles.image}
        />

        <Text
            style={styles.title}
        >
            Agradecemos o Feedback
        </Text>

        <TouchableOpacity 
            style={styles.button}
            onPress={onSendANotherFeedback}
        >
            <Text style={styles.buttonTitle}>
                Quero enviar outro
            </Text> 
        </TouchableOpacity>
        <Copyright />
    </View>
  );
}