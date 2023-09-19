<script lang="typescript">
    import { locale } from '@stores/locale';

    function changeLanguage(lang: string){
        locale.set(lang)
    }
</script>

<div>
    <ul>
        <li><button on:click={() => changeLanguage("en")}>EN</button></li>
        <li><button on:click={() => changeLanguage("se")}>SE</button></li>
    </ul>
</div>

<style lang="scss">
    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px 0;

        li {
            aspect-ratio: 1.5 / 1;
            width: 100%;
            text-decoration: none;
            list-style: none;
            display: grid;
            place-items: center;
            
            button{
                background-color: transparent;
                border: none;
                color: $secondary-color;
                width: 100%;
                height: 100%;
                cursor: pointer;

                &:hover{
                    background-color: $bland-blue;
                }
            }
        }
    }
</style>