import { StatusBar } from "react-native"

export const mainContainer = {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20,
    paddingVertical: 40,
    paddingBottom: 60
}

export const mainTitle = {
    fontSize: 30,
    marginBottom: 30,
}


export const inputArea = {
    flexDirection: "column",
    gap: 30,
}
export const inputField = {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 18,
}

export const button = {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "royalblue",
    borderRadius: 50,
    marginVertical: 15,
    
}
export const btnText = {
    fontSize: 18,
    color: "#FFF"
}

export const cursorsColor = "#000"