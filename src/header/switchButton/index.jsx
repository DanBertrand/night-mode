import { useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ModeContext from '../../context/modeContext';
 
const  SwitchButton = () => {
    const {mode,  switchMode } = useContext(ModeContext);
  return (
    (mode === "day" ? 
        <FormControlLabel
            control={
                <Switch
                    onChange={switchMode}
                    name="checkedB"
                     color="primary"
                />
            }
            label="Day Mode"
        />
        :
        <FormControlLabel
            control={
                <Switch
                    onChange={switchMode}
                    name="checkedB"
                     color="primary"
                />
            }
            label="Night Mode"
        />
    )
  );
};
 
export default SwitchButton
