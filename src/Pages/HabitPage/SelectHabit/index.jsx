import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SelectList } from "react-native-dropdown-select-list"
import HabitsData from '../../../DataBase/HabitData'
export default function SelectHabit({habit, habitInput}) {
    const [selected, setSelected] = useState(
        habit?.habitName ? habit?.habitName : "-"
        )
    const [data, setData] = useState()

    class setDataHabits{
        Mente(){
            setData(HabitsData.dataMind)
        }
        Financeiro(){
            setData(HabitsData.dataMoney)
        }
        Corpo(){
            setData(HabitsData.dataBody)
        }
        Humor(){
            setData(HabitsData.dataFun)
        }
    }
    const setDataFromHabits = new setDataHabits()

    useEffect(()=>{
        setDataFromHabits[habit.habitArea]()
        habitInput(habit?.habitName ? habit?.habitName : undefined)
    }, [])






    
  return (
    <>
    <SelectList
    setSelected={setSelected}
    data={data}
    search={false}
    onSelect={()=>{habitInput(selected)}}
    placeholder={selected}
    boxStyles={styles.boxStyle}
    inputStyles={styles.inputStyle}
    dropdownStyles={styles.dropdownStyle}
    dropdownItemStyles={styles.dropdownItemStyle}
    dropdownTextStyles={styles.dropdownTextStyle}
    arrowIcon={
        <Image
        source={require('./../../../assets/icons/arrowDropdown.png')}
        style={styles.arrow}/>
    }
    >

    </SelectList>
    </>
  )
}

const styles = StyleSheet.create({
    boxStyle:{
        border: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    inputStyle:{
        color: 'white'
    },
    dropdownStyle:{
        borderWidth: 0,
    },
    dropdownItemStyle:{
        borderWidth: 4,
        borderColor: '#BBBB',
        borderRadius: 10,
        marginBottom: 15
    },
    dropdownTextStyle:{
        color: "#BBBBBB"
    },
    arrow:{
        width: 20,
        height: 20
    }
})