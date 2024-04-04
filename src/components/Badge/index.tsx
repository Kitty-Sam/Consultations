import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';

export interface IProps {
    item: ISpecialist | IAnswer;
}

// export const Badge: FC<IProps> = ({ item }) => {
//     const { avatar, name, education, experience, topic } = item;
//     return (
//         <View style={styles.container}>
//             <View style={styles.textWrapper}>
//                 <Image source={{ uri: item.avatar }} style={styles.image} />
//
//                 <View>
//                     <Text>{name}</Text>
//                     <Text>{experience}</Text>
//                     <Text>{education}</Text>
//                 </View>
//             </View>
//
//             {topic ? (
//                 <View style={styles.topicWrapper}>
//                     <Text style={{ fontSize: 18 }}>
//                         <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Тема</Text> {item.topic}
//                     </Text>
//                     <Text>{'>'}</Text>
//                 </View>
//             ) : (
//                 <></>
//             )}
//         </View>
//     );
// };
