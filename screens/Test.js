<Stack.Screen
      // some code ...
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("pageYouWantNavigateTo")}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
              ),
            })}
          />