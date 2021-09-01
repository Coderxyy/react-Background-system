export default {
    saveuser(user) {
        localStorage.setItem('username', JSON.stringify(user))
    },
    getuser() {
        return localStorage.getItem('username')
    },
    removeruser() {
      localStorage.removeItem('username')
    }
}