import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import signinImage from '../assets/images/Signin.png';
import { withStyles } from '@material-ui/styles';
import Buttons from '../components/core/Button';
import InputField from '../components/core/Input';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid:['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio'],
      initialValues: {
        email:'',
        password: '',

      },
    };
  }

  addNewEmail=() =>{
const newEmail='tharshi@gmail.com';
this.setState({emailid:this.state.emailid.concat(newEmail),});
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
    <PublicLayout
        image={signinImage}
        title='Standard Catalogued Data'
        text='Large volumes of diverse data systematically categorized based on distinct criteria for easy and effective filtering of the necessary information.'
      >
    <div>
    <form className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
         /* error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('email', vaule)}
          onBlur={() => formik.setFieldTouched('email')}*/
        />
      </Grid>
      <ul>{this.state.emailid.map((value,index) => <li key={ index }>{ value }</li>)}
     </ul>
    <Buttons color='primary' onClick={ this.addNewEmail }>Submit</Buttons>
    </form>
    </div>
    </PublicLayout>
    );
  }
}

export default withStyles(styles)(Login);

