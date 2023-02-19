import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>(["joão"]);

  const handleParticipantAdd = () => {
    // if (participants.includes(name)) {
    //   alert(`já exite ${"item"}`);
    // }
    setParticipants((prevState) => [...prevState, "ana"]);
  };
  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `remove ${name}`, [
      {
        text: "sim",
        onPress() {
          Alert.alert("deletado");
        },
      },
      {
        text: "não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 29 de fevereiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante."
          placeholderTextColor="#6b6b6b"
          keyboardType="visible-password"
        />
        {/* TouchableOpacity -> butão clicavel  */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item, i) => String(i)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguém chegou no evento ainda? Adicione participantes a sua lista de
            presença.
          </Text>
        )}
      />
      {/* ScrollView -> rolagem */}
      {/* showsVerticalScrollIndicator -> barra de rolagem desativada */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant, index) => (
          <Participant
            name={participant}
            onRemove={handleParticipantRemove}
            key={index}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
